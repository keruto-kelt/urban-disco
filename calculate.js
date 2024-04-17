function calClick()
{
    var cal = document.getElementById('cal');
    var calmsg = document.getElementById('calmsg');
    var str = '';
    var num = 0;
    var op = '';
    var result = 0;
    var count = 0;
    var c = 0;
    var flag = 0;
    var result2 = '';
    for (var i=0;i<cal.value.length;i++)
    {
        if (i==0 && !isNaN(cal.value[i]))
        {
            op = '+';
        }

        else if (i==0 && cal.value[i] == '-')
        {
            op = '-';
        }

        if (isNaN(cal.value[i]) && flag == 0)
        {
            flag = 1;
        }

        if (flag == 2 && !isNaN(cal.value[i]))
        {
            str += String(cal.value[i]);
            count++;
        }

        if (isNaN(cal.value[i]) && flag ==2)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result -= num;
            count = 0;
            c = 0;
            str = '';
            num = 0;
            flag = 3;
        }

        if (flag == 0)
        {
            str += String(cal.value[i]);
            count++;
        }

        if (flag == 1)
        {
            num = 0;
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
                count = 0;
                c = 0;
                str = '';
                num = 0;
                flag = 3;
            }
            if (op == '-')
            {
                flag = 2;
            }
        }

        if (i == cal.value.length-1 && flag == 0)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result += num;
        }
        
        if (flag == 2 && i == cal.value.length-1)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result -= num;
        }

        if (flag == 0 || flag == 1 || flag == 2)
        {
            continue;
        }

        if (isNaN(cal.value[i]))
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
            }
            if (op == '-')
            {
                result -= num;
            }
            if (op == '*')
            {
                result *= num;
            }
            if (op == '/')
            {
                result /= num;
            }
            op = String(cal.value[i]);
            count = 0;
            c = 0;
            str = '';
            num = 0;
        }
        
        else
        {
            str += cal.value[i];
            count++;
        }
        
        if (i==cal.value.length-1)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
            }
            if (op == '-')
            {
                result -= num;
            }
            if (op == '*')
            {
                result *= num;
            }
            if (op == '/')
            {
                result /= num;
            }
        }
    }
    result2 = String(result);
    calmsg.innerText = result2;
}


function varClick()
{
    var cal = document.getElementById('cal');
    var calmsg = document.getElementById('calmsg');
    var str = '';
    var num = 0;
    var op = '';
    var result = 0;
    var count = 0;
    var c = 0;
    var flag = 0;
    for (var i=0;i<cal.value.length;i++)
    {
        if (i==0 && !isNaN(cal.value[i]))
        {
            op = '+';
        }

        else if (i==0 && cal.value[i] == '-')
        {
            op = '-';
        }

        if (isNaN(cal.value[i]) && flag == 0)
        {
            flag = 1;
        }

        if (flag == 2 && !isNaN(cal.value[i]))
        {
            str += String(cal.value[i]);
            count++;
        }

        if (isNaN(cal.value[i]) && flag ==2)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result -= num;
            count = 0;
            c = 0;
            str = '';
            num = 0;
            flag = 3;
        }

        if (flag == 0)
        {
            str += String(cal.value[i]);
            count++;
        }

        if (flag == 1)
        {
            num = 0;
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
                count = 0;
                c = 0;
                str = '';
                num = 0;
                flag = 3;
            }
            if (op == '-')
            {
                flag = 2;
            }
        }

        if (i == cal.value.length-1 && flag == 0)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result += num;
        }
        
        if (flag == 2 && i == cal.value.length-1)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            result -= num;
        }

        if (flag == 0 || flag == 1 || flag == 2)
        {
            continue;
        }

        if (isNaN(cal.value[i]))
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
            }
            if (op == '-')
            {
                result -= num;
            }
            if (op == '*')
            {
                result *= num;
            }
            if (op == '/')
            {
                result /= num;
            }
            op = String(cal.value[i]);
            count = 0;
            c = 0;
            str = '';
            num = 0;
        }
        
        else
        {
            str += cal.value[i];
            count++;
        }
        
        if (i==cal.value.length-1)
        {
            while(count>0)
            {
                count--;
                num += (Number(str[c]) * (10 ** count));
                c++;
            }
            if (op == '+')
            {
                result += num;
            }
            if (op == '-')
            {
                result -= num;
            }
            if (op == '*')
            {
                result *= num;
            }
            if (op == '/')
            {
                result /= num;
            }
        }
    }
    if (Number.isInteger(result))
    {
        calmsg.innerText = String(result);
    }
    else
    {
        flag = 0;
        num = 0;
        str = '';
        count = 0;
        c = 0;
        var deno = 0;
        var nume = 0;
        var result2 = '';
        result2 = String(result);
        for(var i=0;i<result2.length;i++)
        {
            if (flag == 1)
            {
                if (Number(result2[i]) == 1)
                {
                    i++;
                    if (Number(result2[i]) == 1)
                    {
                        nume = 1;
                        deno = 9;
                    }
                    else if (Number(result2[i]) == 2)
                    {
                        nume = 1;
                        deno = 8;
                    }
                    else if (Number(result2[i]) == 4)
                    {
                        nume = 1;
                        deno = 7;
                    }
                    else if (Number(result2[i]) == 6)
                    {
                        nume = 1;
                        deno = 6;
                    }
                    break;
                }

                if (Number(result2[i]) == 2)
                {
                    if (i == result2.length-1)
                    {
                        nume = 1;
                        deno = 5;
                    }

                    i++;

                    if (Number(result2[i]) == 2)
                    {
                        nume = 2;
                        deno = 9;
                    }

                    if (Number(result2[i]) == 5)
                    {
                        nume = 1;
                        deno = 4;
                    }

                    if (Number(result2[i]) == 8)
                    {
                        nume = 2;
                        deno = 7
                    }
                    break;
                }

                if (Number(result2[i]) == 3)
                {
                    i++;
                    if (Number(result2[i]) == 3)
                    {
                        nume = 1;
                        deno = 3;
                    }

                    if (Number(result2[i]) == 7)
                    {
                        nume = 3;
                        deno = 8;
                    }
                    break;
                }

                if (Number(result2[i]) == 4)
                {
                    if (i == result2.length-1)
                    {
                        nume = 2;
                        deno = 5;
                    }

                    i++;

                    if (Number(result2[i]) == 2)
                    {
                        nume = 3;
                        deno = 7;
                    }

                    if (Number(result2[i]) == 4)
                    {
                        nume = 4;
                        deno = 9;
                    }
                    break;
                }

                if (Number(result2[i]) == 5)
                {
                    if (i==result2.length-1)
                    {
                        nume = 1;
                        deno = 2;
                    }

                    i++;

                    if (Number(result2[i]) == 5)
                    {
                        nume = 5;
                        deno = 9;
                    }

                    if (Number(result2[i]) == 7)
                    {
                        nume = 4;
                        deno = 7;
                    }
                    break;
                }

                if (Number(result2[i]) == 6)
                {
                    if (i == result2.length-1)
                    {
                        nume = 3;
                        deno = 5;
                    }

                    i++;

                    if (Number(result2[i]) == 2)
                    {
                        nume = 5;
                        deno = 8;
                    }

                    if (Number(result2[i]) == 6)
                    {
                        nume = 2;
                        deno = 3;
                    }
                    break;
                }

                if (Number(result2[i]) == 7)
                {
                    i++;

                    if (Number(result2[i]) == 1)
                    {
                        nume = 5;
                        deno = 7;
                    }

                    if (Number(result2[i]) == 5)
                    {
                        nume = 3;
                        deno = 4;
                    }

                    if (Number(result2[i]) == 7)
                    {
                        nume = 7;
                        deno = 9;
                    }
                    break;
                }

                if (Number(result2[i]) == 8)
                {
                    if (i == result2.length-1)
                    {
                        nume = 4;
                        deno = 5;
                    }

                    i++;

                    if (Number(result2[i]) == 3)
                    {
                        nume = 5;
                        deno = 6;
                    }

                    if (Number(result2[i]) == 5)
                    {
                        nume = 6;
                        deno = 7;
                    }

                    if (Number(result2[i]) == 7)
                    {
                        nume = 7;
                        deno = 8;
                    }

                    if (Number(result2[i]) == 8)
                    {
                        nume = 8;
                        deno = 9;
                    }
                    break;
                }

                if (Number(result2[i]) == 9)
                {
                    if (Number(result2[i]) == 9)
                    {
                        nume = 9;
                        deno = 10;
                    }
                    break;
                }
            }

            if (result2[i] == '.')
            {
                flag = 1;
            }

            if (flag == 0)
            {
                str += result2[i];
                count++;
            }
        }
        
        while(count > 0)
        {
            count--;
            num += (Number(str[c]) * (10 ** count));
            c++;
        }

        num *= deno;
        nume += num;
        if (nume > deno)
        {
            for (var i=2;i<nume;i++)
            {
                if (nume % i == 0 && deno % i == 0)
                {
                    nume /= i;
                    deno /= i;
                }
            }
        }
        else
        {
            for (var i=2;i<nume;i++)
                {
                    if (nume % i == 0 && deno % i == 0)
                    {
                        nume /= i;
                        deno /= i;
                    }
                }
        }
        flag = 0;
        if (deno == 1)
        {
            flag = 1;
        }
        if (nume == 1 && deno == 1)
        {
            flag = 2;
        }
        if (flag == 0)
        {
            calmsg.innerText += '\n' + nume + '/' + deno;
        }
        else if (flag == 1)
        {
            calmsg.innerText = nume;
        }
        else if (flag == 2)
        {
            calmsg.innerText = 1;
        }
    }
}
