function load()
{
    if(localStorage.getItem('memodata'))
    {
        mydata = localStorage.getItem('memodata');
        document.getElementById("memodata_in").value = mydata;
    }
    else
    {
        document.getElementById("memodata_out").innerText = '保存されていたデータはありません';
    }

    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth()+1;


    const monthDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let calendarHTML = '<table class="calendar"><thead><tr>';

    for (let i = 0; i < 7; i++) {
        if (i === 0) {
            calendarHTML += `<th class="sun">${monthDays[i]}</th>`;
        } else if (i === 6) {
            calendarHTML += `<th class="sat">${monthDays[i]}</th>`;
        } else {
            calendarHTML += `<th>${monthDays[i]}</th>`;
        }
    }

    calendarHTML += '</tr></thead><tbody>';

    const daysInMonth = new Date(date.getFullYear(), currentMonth, 0).getDate();
    const firstDay = new Date(date.getFullYear(), currentMonth-1, 1).getDay();

    const daysInPrevMonth = new Date(date.getFullYear(), currentMonth-1, 0).getDate();

    let dayCount = 1;
    let prevDayCount = daysInPrevMonth - firstDay + 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += `<td class="mute">${prevDayCount}</td>`;
                prevDayCount++;
            } else if (dayCount > daysInMonth) {
                let nextMonthDayCount = dayCount - daysInMonth;
                calendarHTML += `<td class="mute">${nextMonthDayCount}</td>`;
                dayCount++;
            } else {
                // 今日の日付にclassを付ける
                if (dayCount === today) {
                    calendarHTML += `<td class="today">${dayCount}<br><input type="text" id="${String(currentMonth)}${String(dayCount)}" size="1"></td>`;
                } 
                // 月曜日にclassを付ける
                else if (j === 0) {
                    calendarHTML += `<td class="off">${dayCount}<br><input type="text" id="${String(currentMonth)}${String(dayCount)}" size="1"></td>`;
                } else {
                    calendarHTML += `<td>${dayCount}<br><input type="text" id="${String(currentMonth)}${String(dayCount)}" size="1"></td>`;
                }
                dayCount++;
            }
        }

        calendarHTML += '</tr>';

        if (dayCount - daysInMonth > 7) {
            break;
        }
    }

    calendarHTML += '</tbody></table>';

document.getElementById('calendar').innerHTML = calendarHTML;

for (var i=1;i<=daysInMonth;i++)
    {
        var str = '';
        str = String(currentMonth) + String(i);
        if(localStorage.getItem(str))
        {
            mydata = localStorage.getItem(str);
            document.getElementById(str).value = mydata;
        }
    }

todayload();

}

function save()
{
    var memodata = document.getElementById("memodata_in");
    localStorage.setItem('memodata', memodata.value);
    document.getElementById("memodata_out").innerText = '保存されました';
}

function view()
{
    if(!localStorage.getItem('memodata'))
    {
        document.getElementById("memodata_out").innerText = '保存されているデータはありません';
    }
    else
    {
        mydata = localStorage.getItem('memodata');
        document.getElementById("memodata_out").innerText = mydata;
    }
}

function del()
{
    localStorage.removeItem('memodata');
    document.getElementById("memodata_out").innerText = '削除されました';
}
