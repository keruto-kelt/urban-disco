function send()
{
    var se = document.getElementById('now1');
    var p = 'p';
    for (var i = 1; i < 49; i++)
    {
        p = 'p';
        p += i;
        if (document.getElementById(p).value == "")
        {
            document.getElementById(p).value = se.value;
            for (var i = 1; i < 13; i++) {
                var s = String(i);
                var s1 = s;
                s1 += 'cf';
                var cf = document.getElementById(s1);
                var s2 = s;
                s2 += 'i';
                var ni = document.getElementById(s2);
                var s3 = s;
                s3 += 'si';
                var si = document.getElementById(s3);
                var s4 = s;
                s4 += 'r';
                var r = document.getElementById(s4);
                var s5 = s;
                s5 += 'f';
                var f = document.getElementById(s5);
                var s6 = s;
                s6 += 'e';
                var e = document.getElementById(s6);
                var s7 = s;
                s7 += 'w';
                var w = document.getElementById(s7);
                var s8 = s;
                s8 += 't';
                var t = document.getElementById(s8);
                var s9 = s;
                s9 += 'p';
                var p = document.getElementById(s9);
                var s10 = s;
                s10 += 'c';
                var c = document.getElementById(s10);
                var s11 = s;
                s11 += 'ne';
                var ne = document.getElementById(s11);
                var s12 = s;
                s12 += 'ct';
                var ct = document.getElementById(s12);
                var s13 = s;
                s13 += 'ca';
                var ca = document.getElementById(s13);
                localStorage.setItem(s1, cf.value);
                localStorage.setItem(s2, ni.value);
                localStorage.setItem(s3, si.value);
                localStorage.setItem(s4, r.value);
                localStorage.setItem(s5, f.value);
                localStorage.setItem(s6, e.value);
                localStorage.setItem(s7, w.value);
                localStorage.setItem(s8, t.value);
                localStorage.setItem(s9, p.value);
                localStorage.setItem(s10, c.value);
                localStorage.setItem(s11, ne.value);
                localStorage.setItem(s12, ct.value);
                localStorage.setItem(s13, ca.value);
            }
            for (var j = 1; j < 49; j++) {
                var s1 = 'e';
                s1 += String(j);
                var e = document.getElementById(s1);
                var s2 = 'p';
                s2 += String(j);
                var p = document.getElementById(s2);
                var s3 = 'ne';
                s3 += String(j);
                var nne = document.getElementById(s3);
                localStorage.setItem(s1, e.value);
                localStorage.setItem(s2, p.value);
                localStorage.setItem(s3, nne.value);
            }
            alert("遊び代を計算枠に追加しました");
            se.value = "";
            break;
        }
    }
}

function eatsend() {
    var se = document.getElementById('now2');
    var e = 'e';
    for (var i = 1; i < 49; i++) {
        e = 'e';
        e += i;
        if (document.getElementById(e).value == "") {
            document.getElementById(e).value = se.value;
            for (var i = 1; i < 13; i++) {
                var s = String(i);
                var s1 = s;
                s1 += 'cf';
                var cf = document.getElementById(s1);
                var s2 = s;
                s2 += 'i';
                var ni = document.getElementById(s2);
                var s3 = s;
                s3 += 'si';
                var si = document.getElementById(s3);
                var s4 = s;
                s4 += 'r';
                var r = document.getElementById(s4);
                var s5 = s;
                s5 += 'f';
                var f = document.getElementById(s5);
                var s6 = s;
                s6 += 'e';
                var e = document.getElementById(s6);
                var s7 = s;
                s7 += 'w';
                var w = document.getElementById(s7);
                var s8 = s;
                s8 += 't';
                var t = document.getElementById(s8);
                var s9 = s;
                s9 += 'p';
                var p = document.getElementById(s9);
                var s10 = s;
                s10 += 'c';
                var c = document.getElementById(s10);
                var s11 = s;
                s11 += 'ne';
                var ne = document.getElementById(s11);
                var s12 = s;
                s12 += 'ct';
                var ct = document.getElementById(s12);
                var s13 = s;
                s13 += 'ca';
                var ca = document.getElementById(s13);
                localStorage.setItem(s1, cf.value);
                localStorage.setItem(s2, ni.value);
                localStorage.setItem(s3, si.value);
                localStorage.setItem(s4, r.value);
                localStorage.setItem(s5, f.value);
                localStorage.setItem(s6, e.value);
                localStorage.setItem(s7, w.value);
                localStorage.setItem(s8, t.value);
                localStorage.setItem(s9, p.value);
                localStorage.setItem(s10, c.value);
                localStorage.setItem(s11, ne.value);
                localStorage.setItem(s12, ct.value);
                localStorage.setItem(s13, ca.value);
            }
            for (var j = 1; j < 49; j++) {
                var s1 = 'e';
                s1 += String(j);
                var e = document.getElementById(s1);
                var s2 = 'p';
                s2 += String(j);
                var p = document.getElementById(s2);
                var s3 = 'ne';
                s3 += String(j);
                var nne = document.getElementById(s3);
                localStorage.setItem(s1, e.value);
                localStorage.setItem(s2, p.value);
                localStorage.setItem(s3, nne.value);
            }
            alert("食費を計算枠に追加しました");
            se.value = "";
            break;
        }
    }
}

function nesend() {
    var se = document.getElementById('now3');
    var ne = 'ne';
    for (var i = 1; i < 49; i++) {
        ne = 'ne';
        ne += i;
        if (document.getElementById(ne).value == "") {
            document.getElementById(ne).value = se.value;
            for (var i = 1; i < 13; i++) {
                var s = String(i);
                var s1 = s;
                s1 += 'cf';
                var cf = document.getElementById(s1);
                var s2 = s;
                s2 += 'i';
                var ni = document.getElementById(s2);
                var s3 = s;
                s3 += 'si';
                var si = document.getElementById(s3);
                var s4 = s;
                s4 += 'r';
                var r = document.getElementById(s4);
                var s5 = s;
                s5 += 'f';
                var f = document.getElementById(s5);
                var s6 = s;
                s6 += 'e';
                var e = document.getElementById(s6);
                var s7 = s;
                s7 += 'w';
                var w = document.getElementById(s7);
                var s8 = s;
                s8 += 't';
                var t = document.getElementById(s8);
                var s9 = s;
                s9 += 'p';
                var p = document.getElementById(s9);
                var s10 = s;
                s10 += 'c';
                var c = document.getElementById(s10);
                var s11 = s;
                s11 += 'ne';
                var ne = document.getElementById(s11);
                var s12 = s;
                s12 += 'ct';
                var ct = document.getElementById(s12);
                var s13 = s;
                s13 += 'ca';
                var ca = document.getElementById(s13);
                localStorage.setItem(s1, cf.value);
                localStorage.setItem(s2, ni.value);
                localStorage.setItem(s3, si.value);
                localStorage.setItem(s4, r.value);
                localStorage.setItem(s5, f.value);
                localStorage.setItem(s6, e.value);
                localStorage.setItem(s7, w.value);
                localStorage.setItem(s8, t.value);
                localStorage.setItem(s9, p.value);
                localStorage.setItem(s10, c.value);
                localStorage.setItem(s11, ne.value);
                localStorage.setItem(s12, ct.value);
                localStorage.setItem(s13, ca.value);
            }
            for (var j = 1; j < 49; j++) {
                var s1 = 'e';
                s1 += String(j);
                var e = document.getElementById(s1);
                var s2 = 'p';
                s2 += String(j);
                var p = document.getElementById(s2);
                var s3 = 'ne';
                s3 += String(j);
                var nne = document.getElementById(s3);
                localStorage.setItem(s1, e.value);
                localStorage.setItem(s2, p.value);
                localStorage.setItem(s3, nne.value);
            }
            alert("必要経費を計算枠に追加しました");
            se.value = "";
            break;
        }
    }
}

function eatcalc()
{
    var sum = 0;
    var select = document.getElementById('select');
    for (var i = 1; i < 49; i++)
    {
        var s = 'e';
        s += String(i);
        var e = document.getElementById(s);
        sum += Number(e.value);
    }
    for (var i = 1; i < 13; i++)
    {
        if (i == Number(select.value))
        {
            var s = Number(select.value);
            var ss = i;
            s += 'f';
            var e = document.getElementById(s);
            e.value = sum;
            alert(ss + "月の食事代を計算しました");
            break;
        }
    }
}
function eatdel()
{
    for (var i = 1; i < 49; i++)
    {
        var s = 'e';
        s += String(i);
        var e = document.getElementById(s);
        localStorage.setItem(s, '');
        e.value = '';
    }
    document.getElementById('yes1').style.display = 'none';
    document.getElementById('no1').style.display = 'none';
    document.getElementById('check1').style.display = 'none';
    alert("食費代計算枠の内容を全て削除しました。");
}
function Check1()
{
    document.getElementById("check1").innerText = '食費代計算枠の内容を全て削除しますか?';
    document.getElementById('yes1').style.display = 'block';
    document.getElementById('no1').style.display = 'block';
}
function No1()
{
    document.getElementById("check1").innerText = '';
    document.getElementById('yes1').style.display = 'none';
    document.getElementById('no1').style.display = 'none';
}

function playcalc()
{
    var sum = 0;
    var select = document.getElementById('select');
    for (var i = 1; i < 49; i++) {
        var s = 'p';
        s += String(i);
        var e = document.getElementById(s);
        sum += Number(e.value);
    }
    for (var i = 1; i < 13; i++) {
        if (i == Number(select.value)) {
            var s = Number(select.value);
            var ss = i;
            s += 'p';
            var e = document.getElementById(s);
            e.value = sum;
            alert(ss + "月の遊び代を計算しました");
            break;
        }
    }
}
function playdel() {
    for (var i = 1; i < 49; i++) {
        var s = 'p';
        s += String(i);
        var e = document.getElementById(s);
        localStorage.setItem(s, '');
        e.value = '';
    }
    document.getElementById("check2").innerText = '';
    document.getElementById('yes2').style.display = 'none';
    document.getElementById('no2').style.display = 'none';
    alert("遊び代計算枠の内容を全て削除しました");
}
function Check2() {
    document.getElementById("check2").innerText = '遊び代計算枠の内容を全て削除しますか?';
    document.getElementById('yes2').style.display = 'block';
    document.getElementById('no2').style.display = 'block';
}
function No2() {
    document.getElementById("check2").innerText = '';
    document.getElementById('yes2').style.display = 'none';
    document.getElementById('no2').style.display = 'none';
}

function expcalc() {
    var sum = 0;
    var select = document.getElementById('select');
    for (var i = 1; i < 49; i++) {
        var s = 'ne';
        s += String(i);
        var e = document.getElementById(s);
        sum += Number(e.value);
    }
    for (var i = 1; i < 13; i++) {
        if (i == Number(select.value)) {
            var s = Number(select.value);
            var ss = i;
            s += 'ne';
            var e = document.getElementById(s);
            e.value = sum;
            alert(ss + "月の必要経費代を計算しました");
            break;
        }
    }
}
function expdel() {
    for (var i = 1; i < 49; i++) {
        var s = 'ne';
        s += String(i);
        var e = document.getElementById(s);
        localStorage.setItem(s, '');
        e.value = '';
    }
    document.getElementById("check3").innerText = '';
    document.getElementById('yes3').style.display = 'none';
    document.getElementById('no3').style.display = 'none';
    alert("必要経費代計算枠の内容を全て削除しました");
}
function Check3() {
    document.getElementById("check3").innerText = '必要経費代計算枠の内容を全て削除しますか?';
    document.getElementById('yes3').style.display = 'block';
    document.getElementById('no3').style.display = 'block';
}
function No3() {
    document.getElementById("check3").innerText = '';
    document.getElementById('yes3').style.display = 'none';
    document.getElementById('no3').style.display = 'none';
}
function check10() {
    document.getElementById("check10").innerText = '家計簿欄の内容を全て削除しますか?';
    document.getElementById('yes10').style.display = 'block';
    document.getElementById('no10').style.display = 'block';
}
function No10() {
    document.getElementById("check10").innerText = '';
    document.getElementById('yes10').style.display = 'none';
    document.getElementById('no10').style.display = 'none';
}
function del() {
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'cf';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'i';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'si';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'r';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'f';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'e';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'w';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 't';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'p';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'c';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'ne';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'ct';
        var e = document.getElementById(s);
        e.value = '';
    }
    for (var i = 1; i < 13; i++) {
        var s = '';
        s += String(i);
        s += 'ca';
        var e = document.getElementById(s);
        e.value = '';
    }
    document.getElementById("check10").innerText = '';
    document.getElementById('yes10').style.display = 'none';
    document.getElementById('no10').style.display = 'none';
    alert("家計簿内の内容を全て削除しました");
}

function ctcalc()
{
    var sum = 0;
    var select = document.getElementById('select');
    var s1 = select.value;
    s1 += 'r';
    sum += Number(document.getElementById(s1).value);
    var s2 = select.value;
    s2 += 'f';
    sum += Number(document.getElementById(s2).value);
    var s3 = select.value;
    s3 += 'e';
    sum += Number(document.getElementById(s3).value);
    var s4 = select.value;
    s4 += 'w';
    sum += Number(document.getElementById(s4).value);
    var s5 = select.value;
    s5 += 't';
    sum += Number(document.getElementById(s5).value);
    var s6 = select.value;
    s6 += 'p';
    sum += Number(document.getElementById(s6).value);
    var s7 = select.value;
    s7 += 'c';
    sum += Number(document.getElementById(s7).value);
    var s8 = select.value;
    s8 += 'ne';
    sum += Number(document.getElementById(s8).value);
    var s = select.value;
    var ss = select.value;
    s += 'ct';
    var e = document.getElementById(s);
    e.value = sum;
    alert(ss + "月の消費合計代を計算しました");
}

function cacalc() {
    var sum = 0;
    var select = document.getElementById('select');
    var s1 = select.value;
    s1 += 'cf';
    sum += Number(document.getElementById(s1).value);
    var s2 = select.value;
    s2 += 'i';
    sum += Number(document.getElementById(s2).value);
    var s3 = select.value;
    s3 += 'si';
    sum += Number(document.getElementById(s3).value);
    var s4 = select.value;
    s4 += 'ct';
    sum -= Number(document.getElementById(s4).value);
    var s = select.value;
    var ss = select.value;
    s += 'ca';
    var e = document.getElementById(s);
    e.value = sum;
    alert(ss + "月の翌月繰り越し額を計算しました");
}
function save()
{
    for (var i = 1; i < 13; i++)
    {
        var s = String(i);
        var s1 = s;
        s1 += 'cf';
        var cf = document.getElementById(s1);
        var s2 = s;
        s2 += 'i';
        var ni = document.getElementById(s2);
        var s3 = s;
        s3 += 'si';
        var si = document.getElementById(s3);
        var s4 = s;
        s4 += 'r';
        var r = document.getElementById(s4);
        var s5 = s;
        s5 += 'f';
        var f = document.getElementById(s5);
        var s6 = s;
        s6 += 'e';
        var e = document.getElementById(s6);
        var s7 = s;
        s7 += 'w';
        var w = document.getElementById(s7);
        var s8 = s;
        s8 += 't';
        var t = document.getElementById(s8);
        var s9 = s;
        s9 += 'p';
        var p = document.getElementById(s9);
        var s10 = s;
        s10 += 'c';
        var c = document.getElementById(s10);
        var s11 = s;
        s11 += 'ne';
        var ne = document.getElementById(s11);
        var s12 = s;
        s12 += 'ct';
        var ct = document.getElementById(s12);
        var s13 = s;
        s13 += 'ca';
        var ca = document.getElementById(s13);
        localStorage.setItem(s1, cf.value);
        localStorage.setItem(s2, ni.value);
        localStorage.setItem(s3, si.value);
        localStorage.setItem(s4, r.value);
        localStorage.setItem(s5, f.value);
        localStorage.setItem(s6, e.value);
        localStorage.setItem(s7, w.value);
        localStorage.setItem(s8, t.value);
        localStorage.setItem(s9, p.value);
        localStorage.setItem(s10, c.value);
        localStorage.setItem(s11, ne.value);
        localStorage.setItem(s12, ct.value);
        localStorage.setItem(s13, ca.value);
    }
    for (var j = 1; j < 49; j++)
    {
        var s1 = 'e';
        s1 += String(j);
        var e = document.getElementById(s1);
        var s2 = 'p';
        s2 += String(j);
        var p = document.getElementById(s2);
        var s3 = 'ne';
        s3 += String(j);
        var nne = document.getElementById(s3);
        localStorage.setItem(s1, e.value);
        localStorage.setItem(s2, p.value);
        localStorage.setItem(s3, nne.value);
    }
    alert("入力内容が保存されました");
}
function eatsave1()
{
    for (var j = 1; j < 49; j++)
    {
        var s1 = 'e';
        s1 += String(j);
        var e = document.getElementById(s1);
        localStorage.setItem(s1, e.value);
    }
    alert("食費計算枠の入力内容が保存されました");
}

function psave2() {
    for (var j = 1; j < 49; j++) {
        var s1 = 'p';
        s1 += String(j);
        var e = document.getElementById(s1);
        localStorage.setItem(s1, e.value);
    }
    alert("遊び代計算枠の入力内容が保存されました");
}

function nesave3() {
    for (var j = 1; j < 49; j++) {
        var s1 = 'ne';
        s1 += String(j);
        var e = document.getElementById(s1);
        localStorage.setItem(s1, e.value);
    }
    alert("必要経費計算枠の入力内容が保存されました");
}
function load()
{
    var today = new Date();
    var tt = today.getFullYear();
    var t = today.getMonth();
    var ttt = today.getDate();
    t += 1;
    var aa = '本日の日付　';
    aa += tt;
    aa += '年';
    aa += t;
    aa += '月';
    aa += ttt;
    aa += '日';
    document.getElementById("today").innerText = aa;
    document.getElementById('select').value = t;
    for (var i = 1; i < 13; i++)
    {
        if (t == i)
        {
            var s = String(t);
            s += 'mo';
            document.getElementById(s).style.backgroundColor = 'skyblue';
        }
    }
    for (var i = 1; i < 13; i++)
    {
        var s = String(i);
        var s1 = s;
        s1 += 'cf';
        var s2 = s;
        s2 += 'i';
        var s3 = s;
        s3 += 'si';
        var s4 = s;
        s4 += 'r';
        var s5 = s;
        s5 += 'f';
        var s6 = s;
        s6 += 'e';
        var s7 = s;
        s7 += 'w';
        var s8 = s;
        s8 += 't';
        var s9 = s;
        s9 += 'p';
        var s10 = s;
        s10 += 'c';
        var s11 = s;
        s11 += 'ne';
        var s12 = s;
        s12 += 'ct';
        var s13 = s;
        s13 += 'ca';
        if (localStorage.getItem(s1))
        {
            var mydata = localStorage.getItem(s1);
            var cf = document.getElementById(s1);
            cf.value = mydata;
        }
        if (localStorage.getItem(s2))
        {
            var mydata = localStorage.getItem(s2);
            var inc = document.getElementById(s2);
            inc.value = mydata;
        }
        if (localStorage.getItem(s3))
        {
            var mydata = localStorage.getItem(s3);
            var si = document.getElementById(s3);
            si.value = mydata;
        }
        if (localStorage.getItem(s4))
        {
            var mydata = localStorage.getItem(s4);
            var r = document.getElementById(s4);
            r.value = mydata;
        }
        if (localStorage.getItem(s5))
        {
            var mydata = localStorage.getItem(s5);
            var f = document.getElementById(s5);
            f.value = mydata;
        }
        if (localStorage.getItem(s6))
        {
            var mydata = localStorage.getItem(s6);
            var e = document.getElementById(s6);
            e.value = mydata;
        }
        if (localStorage.getItem(s7))
        {
            var mydata = localStorage.getItem(s7);
            var w = document.getElementById(s7);
            w.value = mydata;
        }
        if (localStorage.getItem(s8))
        {
            var mydata = localStorage.getItem(s8);
            var t = document.getElementById(s8);
            t.value = mydata;
        }
        if (localStorage.getItem(s9))
        {
            var mydata = localStorage.getItem(s9);
            var p = document.getElementById(s9);
            p.value = mydata;
        }
        if (localStorage.getItem(s10))
        {
            var mydata = localStorage.getItem(s10);
            var c = document.getElementById(s10);
            c.value = mydata;
        }
        if (localStorage.getItem(s11))
        {
            var mydata = localStorage.getItem(s11);
            var ne = document.getElementById(s12);
            ne.value = mydata;
        }
        if (localStorage.getItem(s12))
        {
            var mydata = localStorage.getItem(s12);
            var ct = document.getElementById(s12);
            ct.value = mydata;
        }
        if (localStorage.getItem(s13))
        {
            var mydata = localStorage.getItem(s13);
            var ca = document.getElementById(s13);
            ca.value = mydata;
        }
    }
    for (var j = 1; j < 49; j++)
    {
        var s = String(j);
        var s1 = 'e';
        s1 += s;
        var s2 = 'p';
        s2 += s;
        var s3 = 'ne';
        s3 += s;
        if (localStorage.getItem(s1))
        {
            var mydata = localStorage.getItem(s1);
            var e = document.getElementById(s1);
            e.value = mydata;
        }
        if (localStorage.getItem(s2))
        {
            var mydata = localStorage.getItem(s2);
            var p = document.getElementById(s2);
            p.value = mydata;
        }
        if (localStorage.getItem(s3))
        {
            var mydata = localStorage.getItem(s3);
            var nne = document.getElementById(s3);
            nne.value = mydata;
        }
    }
    var to = today.getMonth();
    if (to == 1)
    {
        var cf = to;
        cf += 'cf';
        document.getElementById(cf).value = document.getElementById('12ca').value;
    }
    else
    {
        var ca = to;
        ca += 'ca';
        var cf = to;
        cf += 1;
        cf += 'cf';
        document.getElementById(cf).value = document.getElementById(ca).value;
    }
}
