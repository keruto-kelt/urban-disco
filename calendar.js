function calendarsave()
{   
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const daysInMonth = new Date(date.getFullYear(), currentMonth, 0).getDate();
    for (var i=1;i<=daysInMonth;i++)
    {
        var str = '';
        str = String(currentMonth) + String(i);
        var daydata = document.getElementById(str);
        localStorage.setItem(str, daydata.value);
    }
    document.getElementById("calendarsavemsg").innerText = '保存されました';
}

function todayload()
{
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const today = date.getDate();
    var str = String(currentMonth) + String(today);
    if (localStorage.getItem(str))
    {
        mydata = localStorage.getItem(str);
        document.getElementById('schedulemsg').innerText = mydata;
    }
    else
    {
        document.getElementById('schedulemsg').innerText = 'なし';
    }
}

function calendarview()
{
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const daysInMonth = new Date(date.getFullYear(), currentMonth, 0).getDate();
    document.getElementById("calendarviewmsg").innerText = '';
    for (var i=1;i<=daysInMonth;i++)
    {
        var str = '';
        str = String(currentMonth) + String(i);
        if(localStorage.getItem(str))
        {
            mydata = localStorage.getItem(str);
            document.getElementById("calendarviewmsg").innerText += String(currentMonth) + '月' + String(i) + '日の予定: ' + mydata;
            document.getElementById("calendarviewmsg").innerText += '\n';
        }
    }
}

function calendardel()
{
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const daysInMonth = new Date(date.getFullYear(), currentMonth, 0).getDate();
    for (var i=1;i<=daysInMonth;i++)
    {
        var str = '';
        str = String(currentMonth) + String(i);
        if(localStorage.getItem(str))
        {
            localStorage.removeItem(str);
        }
    }
    document.getElementById("calendardelmsg").innerText = 'カレンダーの内容はすべて削除されました';
}
