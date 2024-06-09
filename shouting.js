var widthuse = 0;    //敵横方向砲撃が画面上に存在するか
var heightuse= 0;    //敵縦方向砲撃が画面上に存在するか
var bombuse = 1;     //自機砲撃が画面上に存在するか
var jumpuse = 1;     //自機がジャンプをしている最中か
var enejump = 0;     //敵がジャンプをしている最中か
var py = 230;        //自機のy座標
var px = 20;         //自機のx座標
var ey = 230;        //敵のy座標
var ex = 430;        //敵のx座標
var ewx = 410;       //敵横方向砲撃のx座標
var ewy = 240;       //敵横方向砲撃のy座標
var ehx = 410;       //敵縦方向砲撃のx座標
var ehy = 230;       //敵縦方向砲撃のy座標
var pbx = 70;        //自機砲撃のx座標
var pby = 245;       //自機砲撃のy座標
var hitcount = 0;    //自機砲撃のヒット数
var stopflag = 0;    //ゲーム終了時にストップするためのフラグ
var restartflag = 1; //ゲームをリスタートするためのフラグ
var gamecount = 0;   //何ゲーム目かをカウントする

function gameload()
{
    const enemy = document.getElementById('enemy');
    const player = document.getElementById('player');
    const context = enemy.getContext('2d');
    const context2 = player.getContext('2d');
    context.fillStyle = '#c0c0c0';
    context2.fillStyle = '#0000ff';
    context.fillRect(0,0,50,50);
    context2.fillRect(0,0,50,50);
    document.getElementById("man").innerHTML = 'キー設定<br>Shift-->ジャンプ&emsp;Enter-->攻撃';
    document.addEventListener('keydown',
    event => {
        if (event.key == '1' && restartflag == 1) start();
    });
}

function start()
{
    gamecount++;
    restartflag = 0;
    widthuse = 0;
    heightuse= 0;
    bombuse = 0;
    jumpuse = 0;
    enejump = 0;
    hitcount = 0;
    py = 230;
    px = 20;
    ey = 230;
    ex = 430;
    ewx = 410;
    ewy = 240;
    ehx = 410;
    ehy = 230;
    stopflag = 0;
    const player = document.getElementById('player');
    const enemy = document.getElementById('enemy');
    const weneb = document.getElementById('widthenemyb');
    const heneb = document.getElementById('heightenemyb');
    const playerb = document.getElementById('playerb');
    if (gamecount == 1) document.getElementById('zic_audio').currentTime = 0;
    document.getElementById('zic_audio').volume = 0.2;
    document.getElementById('zic_audio').play();
    document.getElementById('zic_audio').loop = true;    
    document.getElementById("count").innerText = hitcount;
    player.style.top = String(py) + 'px';
    player.style.left = String(px) + 'px';
    enemy.style.top = String(ey) + 'px';
    enemy.style.left = String(ex) + 'px';
    weneb.style.display = 'none';
    heneb.style.display = 'none';
    playerb.style.display = 'none';
    const button = document.getElementById('startbutton');
    button.style.display = 'none';
    document.getElementById("clear").innerText = '';
    document.addEventListener('keydown',
    event => {
        if (event.key == 'Shift') jump();
        if (event.key == 'Enter') bomb();
    });
    const interval = setInterval(function()
    {
        var random = Math.floor(Math.random() * 1000);
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        if (widthuse == 0 && random%17 == 0)
        {
            widthenemybomb();
        }
        if (heightuse == 0 && random%27 == 0 && random%13 == 0 && enejump == 0)
        {
            heightenemybomb();
        }
        if (random%33 == 0 && random%5 == 0)
        {
            enemyjump();
        }
        document.getElementById("count").innerText = hitcount;
    },10);
}

function jump()
{
    if (jumpuse == 1)
    {
        return;
    }
    jumpuse = 1;
    const player = document.getElementById("player");
    let flag = 0;
    const interval = setInterval(function() {
        player.style.top = String(py) + 'px';
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        if (flag == 0)
        {
            py-=2;
        }
        if (py === 100)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            py+=2;
        }
        if (py > 230)
        {
            jumpuse = 0;
            py = 230;
            px = 20;
            clearInterval(interval);
        }
      }, 10);
}

function enemyjump()
{
    if (enejump == 1)
    {
        return;
    }
    enejump = 1;
    const enemy = document.getElementById("enemy");
    let flag = 0;
    const interval = setInterval(function() {
        enemy.style.top = String(ey) + 'px';
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        if (flag == 0)
        {
            ey-=2;
        }
        if (ey === 100)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            ey+=2;
        }
        if (ey > 230)
        {
            enejump = 0;
            ey = 230;
            ex = 430;
            clearInterval(interval);
        }
      }, 10);
}

function bomb()
{
    if (bombuse == 1)
    {
        return;
    }
    bombuse = 1;
    const playerb = document.getElementById("playerb");
    playerb.style.display = 'block';
    pbx = 70;
    pby = py+15;
    playerb.style.top = String(pby) + 'px';
    const context = playerb.getContext('2d');
    context.fillStyle = '#00ffff';
    context.fillRect(0,0,20,20);
    const interval = setInterval(function() {
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        playerb.style.left = String(pbx) + 'px';
        pbx+=3;
        if ((pbx > ex-20 && pbx < ex+48) && (pby > ey-20 && pby < ey+48))
        {
            document.getElementById('pahu_audio').currentTime = 0;
            document.getElementById('pahu_audio').play();
            hitcount++;
            bombuse = 0;
            playerb.style.display = 'none';
            if (hitcount == 10)
            {
                finishgame();
                gameclear();
            }
            clearInterval(interval);
        }
        if (pbx > 500)
        {
            bombuse = 0;
            playerb.style.display = 'none';
            clearInterval(interval);
        }
    },10);
}

function widthenemybomb()
{
    widthuse = 1;
    ewx = 410;
    ewy = ey+15;
    const eneb = document.getElementById('widthenemyb');
    eneb.style.display = 'block';
    eneb.style.top = String(ewy) + 'px';
    const context = eneb.getContext('2d');
    context.fillStyle = '#808080';
    context.fillRect(0,0,20,20);
    const interval = setInterval(function() {
        eneb.style.left = String(ewx) + 'px';
        ewx-=3;
        if ((ewx > px-20 && ewx < px+48) && (ewy > py-20 && ewy < py+48))
        {
            document.getElementById('lose_audio').currentTime = 0;
            document.getElementById('lose_audio').play();
            finishgame();
        }
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        if (ewx < -20)
        {
            eneb.style.display = 'none';
            widthuse = 0;
            clearInterval(interval);
        }
    },10);
}

function heightenemybomb()
{
    heightuse = 1;
    ehx = 410;
    ehy = 230;
    const eneb = document.getElementById('heightenemyb');
    eneb.style.display = 'block';
    const context = eneb.getContext('2d');
    context.fillStyle = '#808080';
    context.fillRect(0,0,20,20);
    const interval = setInterval(function() {
        eneb.style.left = String(ehx) + 'px';
        eneb.style.top = String(ehy) + 'px';
        if ((ehx > px-20 && ehx < px+48) && (ehy > py-20 && ehy < py+48))
            {
                document.getElementById('lose_audio').currentTime = 0;
                document.getElementById('lose_audio').play();
                finishgame();
            }
        ehx-=3;
        ehy--;
        if (stopflag == 1)
        {
            clearInterval(interval);
        }
        if (ehx < -20)
        {
            eneb.style.display = 'none';
            heightuse = 0;
            clearInterval(interval);
        }
    },10);
}

function finishgame()
{
    const button = document.getElementById('startbutton');
    stopflag = 1;
    button.style.display = 'block';
    restartflag = 1;
}

function gameclear()
{
    document.getElementById("count").innerText = '';
    document.getElementById("clear").innerText = 'クリア!!!!';
    document.getElementById('zic_audio').pause();
    document.getElementById('zic_audio').currentTime = 0;
    document.getElementById('clear_audio').currentTime = 0;
    document.getElementById('clear_audio').play();
}
