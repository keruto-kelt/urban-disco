function binClick()
{
    let bin = document.getElementById('binary');
    let binmsg = document.getElementById('binmsg');
    

    if (bin.value.match(/[^0-9]+/))
    {
        binmsg.innerText = 'Error: 数字以外の入力か全角数字の入力がされています!';
        return;
    }

    if (bin.value.match(/[2-9]+/))
    {
        binmsg.innerText = 'Error: 1と0以外の数字が含まれています!';
        return;
    }
    var count = 0;
    var count2 = 0;
    var num = 0;
    var result = '';
    var result2 = '';
    var str = '';
    for(var i=0;i<bin.value.length;i++)
    {
        result += bin.value[i];
        if(i == (3 + count*4))
        {
            if(i == bin.value.length-1)
            {
                break;
            }
            result += ',';
            count++;
        }
    }
    for(var i=bin.value.length-1;i>=0;i--)
    {
        if (bin.value[i] == '1')
        {
            num += (2 ** count2);
        }
        count2++;
    }
    count = 0;
    str = String(num);
    for (var i=0;i<str.length;i++)
    {
        result2 += str[i];
        if (i == (3+count*4))
        {
            result2+=',';
            count++;
        }
    }
    binmsg.innerText = result;
    binmsg.innerText += ' -> ';
    binmsg.innerText += result2;
}
