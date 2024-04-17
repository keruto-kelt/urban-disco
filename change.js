const buttonClick = () =>
{
    let money=document.getElementById('money');
    let msg = document.getElementById('msg');
    var result = '';
    var count0 = 0;
    var countop = 0;
    for (var i=0;i<money.value.length;i++)
    {
        if (!isNaN(Number(money.value[i])))
        {
            result += money.value[i];
        }
        else
        {
            countop+=1;
        }

        if (money.value[i] == '百')
        {
            count0 += 2;
        }

        if (money.value[i] == '千')
        {
            count0 += 3;
        }

        if (money.value[i] == '万')
        {
            count0 += 4;
        }

        if (money.value[i] == '億')
        {
            count0 += 8;
        }

        if (money.value[i] == '兆')
        {
            count0 += 12;
        }

        if (money.value[i] == '京')
        {
            count0 += 16;
        }
    
        if (money.value[i] == '垓')
        {
            count0 += 20;
        }
    
        if (money.value[i] == '杼')
        {
            count0 += 24;
        }

        if (money.value[i] == '穰')
        {
            count0 += 28;
        }
    
        if (money.value[i] == '溝')
        {
            count0 += 32;
        }
    
        if (money.value[i] == '澗')
        {
            count0 += 36;
        }

        if (money.value[i] == '正')
        {
            count0 += 40;
        }

        if (money.value[i] == '載')
        {
            count0 += 44;
        }

        if (money.value[i] == '極')
        {
            count0 += 48;
        }

        if (money.value[i] == '恒河沙')
        {
            count0 += 52;
        }

        if (money.value[i] == '阿僧祇')
        {
            count0 += 56;
        }

        if (money.value[i] == '那由他')
        {
            count0 += 60;
        }

        if (money.value[i] == '不可思議')
        {
            count0 += 64;
        }

        if (money.value[i] == '無量大数')
        {
            count0 += 68;
        }

    }
    for (var i=0;i<count0;i++)
    {
        result += '0';
    }
    
    var count = 0;
    var flag = 0;
    var change = result.length;
    var result2 = '';
    var result3 = '';
    
    for (var i=change-1;i>=0;i--)
    {
        count++;
        if (count == 5)
        {
            result2 += '万';
        }

        if (count == 9)
        {
            result2 += '億';
        }

        if (count == 13)
        {
            result2 += '兆';
        }

        if (count == 17)
        {
            result2 += '京';
        }

        if (count == 21)
        {
            result2 += '垓';
        }

        if (count == 25)
        {
            result2 += 'ょじ';
        }

        if (count == 29)
        {
            result2 += '穣';
        }

        if (count == 33)
        {
            result2 += '溝';
        }

        if (count == 37)
        {
            result2 += '澗';
        }

        if (count == 41)
        {
            result2 += '正';
        }

        if (count == 45)
        {
            result2 += '載';
        }

        if (count == 49)
        {
            result2 += '極';
        }

        if (count == 53)
        {
            result2 += '沙河恒';
        }

        if (count == 57)
        {
            result2 += '祇僧阿';
        }

        if (count == 61)
        {
            result2 += '他由那';
        }

        if (count == 65)
        {
            result2 += '議思可不';
        }

        if (count == 69)
        {
            result2 += '数大量無';
        }
        if (count == 73)
        {
            flag = 1;
        }
        result2 += result[i]
    }
    if (flag == 1)
    {
        result3 += 'Error: 入力された数字が大きすぎます!';
    }
    else
    {
        for (var i=result2.length-1;i>=0;i--)
        {
            result3 += result2[i];
        }
        result3 += "円";
    }
    msg.innerText = result3;
    
}
