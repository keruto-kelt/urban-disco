//以下格ゲーのグローバル変数
var fpy = 210;        //自分のy座標
var fpx = 35;         //自分のx座標
var fey = 210;        //敵のy座標
var fex = 470;        //敵のx座標
var blood = 0;        //自分が出血したかどうか
var eblood = 0;       //敵が出血したかどうか
var punchuse = 1;     //自分がパンチを打っている途中か
var stpunchuse = 1;   //自分がストレートパンチを打っている途中か
var fpunchuse = 1;    //自分がフックを打っている途中か
var elbowuse = 1;     //自分がひじうちを打っている途中か
var walkuse = 1;      //自分が移動中か
var fjumpuse = 1;     //自分がジャンプ中か
var lowkickuse = 1;   //自分がローキック中か
var middlekickuse = 1;//自分がミドルキック中か
var highkickuse = 1;  //自分がハイキック中か
var epunchuse = 0;    //敵がパンチを打っている途中か
var estpunchuse = 0;  //敵がストレートパンチを打っている途中か
var efpunchuse = 0;   //敵がフックを打っている途中か
var eelbowuse = 0;    //敵がひじうちを打っている途中か
var elowkickuse = 0;  //敵がローキックを打っている途中か
var emiddlekickuse = 0;//敵がミドルキックを打っている途中か
var ehighkickuse = 0; //敵がハイキックを打っている途中か
var ebstpunchuse = 0; //敵がボディストレートを打っている途中か
var ewalkuse = 0;     //敵が移動中か
var ejumpuse = 0;     //敵がジャンプ中か
var fhitflag = 0;     //自分のパンチがヒットしたか
var fehitflag = 0;    //敵のパンチがヒットしたか
var fhitcount = 0;    //自分のパンチが何回ヒットしたか
var fehitcount = 0;   //敵のパンチが何回ヒットしたか 
var lowhit = 0;       //ローキックが何回ヒットしたか
var elowhit = 0;      //敵のローキックが何回ヒットしたか
var guardflag = 0;    //自分がガード中か
var hguarduse = 0;    //ハイガード中か
var mguarduse = 0;    //ミドルガード中か
var lguarduse = 0;    //ローガード中か
var hguardflag = 0;   //ハイキックガード入力されたか
var mguardflag = 0;   //ミドルキックガード入力されたか
var lguardflag = 0;   //ローキックガード入力されたか
var ehguarduse = 0;   //敵がハイガード中か
var emguarduse = 0;   //敵がミドルガード中か
var elguarduse = 0;   //敵がローガード中か
var ehguardflag = 0;  //敵がハイキックガード入力されたか
var emguardflag = 0;  //敵がミドルキックガード入力されたか
var elguardflag = 0;  //敵がローキックガード入力されたか
var elbowrange = 0;   //エルボーの射程に入ったかどうか
var fockrange = 0;    //フックの射程に入ったかどうか
var punchrange = 0;   //ジャブの射程に入ったかどうか
var highkickrange = 0;//ハイキックの射程に入ったかどうか
var lowkickrange = 0; //ローキックの射程に入ったかどうか
var straightrange = 0;//ストレートの射程に入ったかどうか
var middlekickrange = 0;//ミドルキックの射程に入ったかどうか
var lowguardrange = 0;//ローガードの距離に入ったかどうか
var middleguardrange = 0;//ミドルガードの距離に入ったかどうか
var highguardrange = 0;//ハイガードの距離に入ったかどうか
var fstopflag = 0;    //ゲームストップのためのフラグ
var frestartflag = 1; //ゲームをリスタートするためのフラグ
var gamecount = 0;    //何ゲーム目かをカウントする
var stagecount = 0;   //何ステージ目かをカウントする
var losecount = 0;    //負けた回数をカウントする
var newoneflag = 0;   //第1ステージが初めてかどうかのフラグ
var newtwoflag = 0;   //第2ステージが初めてかどうかのフラグ
var newthreeflag = 0; //第3ステージが初めてかどうかのフラグ
var newfourflag = 0;  //第4ステージが初めてかどうかのフラグ

function gameload()
{
    document.addEventListener('keydown',
    event => {
        if (event.key == '2' && frestartflag == 1) fightstart();
        if (event.key == '3' && frestartflag == 1) normalstart();
        if (event.key == '4' && frestartflag == 1) easystart();
    });


    //以下は格ゲーの要素
    
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';
    const rbutton = document.getElementById('buttlerestartbutton');
    rbutton.style.display = 'none';
    const secondbutton = document.getElementById('secondbutton');
    secondbutton.style.display = 'none';
    const threebutton = document.getElementById('threebutton');
    threebutton.style.display = 'none';
    const fourbutton = document.getElementById('fourbutton');
    fourbutton.style.display = 'none';
    const nrebutton = document.getElementById('nrestartbutton');
    nrebutton.style.display = 'none';
    const nsecondbutton = document.getElementById('nsecondbutton');
    nsecondbutton.style.display = 'none';
    const nthreebutton = document.getElementById('nthreebutton');
    nthreebutton.style.display = 'none';
    const nfourbutton = document.getElementById('nfourbutton');
    nfourbutton.style.display = 'none';
    const erebutton = document.getElementById('erestartbutton');
    erebutton.style.display = 'none';
    const esecondbutton = document.getElementById('esecondbutton');
    esecondbutton.style.display = 'none';
    const ethreebutton = document.getElementById('ethreebutton');
    ethreebutton.style.display = 'none';
    const efourbutton = document.getElementById('efourbutton');
    efourbutton.style.display = 'none';
    const endbutton = document.getElementById('endbutton');
    endbutton.style.display = 'none';
    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = '難易度を選択してスタートするとキー設定がここに出る';
    var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        var bodycanvas = document.getElementById('bodyplayer');
        var bodycontext = bodycanvas.getContext('2d');
        var bodycanvas2 = document.getElementById('bodyplayer2');
        var bodycontext2 = bodycanvas2.getContext('2d');
        var legcanvas = document.getElementById('legplayer');
        var legcontext = legcanvas.getContext('2d');
        var legcanvas2 = document.getElementById('legplayer2');
        var legcontext2 = legcanvas2.getContext('2d');
        var facecanvas = document.getElementById('faceplayer');
        var facecontext = facecanvas.getContext('2d');
    
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(38,70);
        armcontext.lineTo(28,100);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(38,70);
        armcontext2.lineTo(70,75);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext3.moveTo(28,100);
        armcontext3.lineTo(50,55);
        armcontext3.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(40,130);
        legcontext.lineTo(85,60);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(40,130);
        legcontext2.lineTo(35,150);
        legcontext2.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(40,60);
        bodycontext.lineTo(35,95);
        bodycontext.stroke();
        bodycontext2.beginPath();
        bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
        bodycontext2.moveTo(35,95);
        bodycontext2.lineTo(40,130);
        bodycontext2.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(40,40,20,0,Math.PI*2,true);
        facecontext.stroke();
    
        var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(100,70);
    earm.lineTo(50,55);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(100,70);
    earm2.lineTo(120,80);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(120,80);
    earm3.lineTo(95,75);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(100,60);
    ebody.lineTo(105,120);
    ebody.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(105,120);
    elegcontext.lineTo(90,140);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(105,120);
    elegcontext2.lineTo(120,140);
    elegcontext2.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(100,40,20,0,Math.PI*2,true);
    eface.stroke();
}

//以下格ゲーの関数

function fightstart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 1;
    
    if (newoneflag == 0) document.getElementById('saiya_audio').currentTime = 0;
    document.getElementById('saiya_audio').volume = 0.5;
    document.getElementById('saiya_audio').play();
    document.getElementById('saiya_audio').loop = true;
    newoneflag = 1;

    var gauge = document.getElementById('gauge');
    gauge.style.display = 'block';
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    redgauge.style.display = 'block';
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    gauge2.style.display = 'block';
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    redgauge2.style.display = 'block';
    var redgcontext2 = redgauge2.getContext('2d');
    const hard = document.getElementById('hard');
    hard.style.display = 'none';
    const normal = document.getElementById('normal');
    normal.style.display = 'none';
    const easy = document.getElementById('easy');
    easy.style.display = 'none';
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';
    const rbutton = document.getElementById('buttlerestartbutton');
    rbutton.style.display = 'none';
    const bu = document.getElementById('battle');
    bu.style.display = 'none';

    document.getElementById('select_audio').pause();

    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = 'キー設定<br>矢印左-->左に移動と上段ガード&emsp;矢印右-->右に移動<br>E-->ジャブ&emsp;W-->ストレート&emsp;Q-->フック<br>D-->ローキック&emsp;S-->ミドルキック&emsp;A-->ハイキック<br>X-->中段ガード&emsp;C-->下段ガード&emsp;F-->ジャンプ<br>Z-->肘打ち';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    armcanvas.style.display = 'block';
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    armcanvas2.style.display = 'block';
    var armcontext2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    armcanvas3.style.display = 'block';
    var armcontext3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    armcanvas4.style.display = 'block';
    var bodycanvas2 = document.getElementById('bodyplayer2');
    bodycanvas2.style.display = 'block';
    var bodycontext2 = bodycanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    bodycanvas.style.display = 'block';
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    legcanvas.style.display = 'block';
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    legcanvas2.style.display = 'block';
    var legcontext2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    legcanvas3.style.display = 'block';
    var facecanvas = document.getElementById('faceplayer');
    facecanvas.style.display = 'block';
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    earmcanvas.style.display = 'block';
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    earmcanvas2.style.display = 'block';
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    earmcanvas3.style.display = 'block';
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    earmcanvas4.style.display = 'block';
    var ebodycanvas = document.getElementById('ebody');
    ebodycanvas.style.display = 'block';
    var ebodycanvas2 = document.getElementById('ebody2');
    ebodycanvas2.style.display = 'block';
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    elegcanvas.style.display = 'block';
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    elegcanvas2.style.display = 'block';
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    elegcanvas3.style.display = 'block';
    var efacecanvas = document.getElementById('eface');
    efacecanvas.style.display = 'block';
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    armcontext3.beginPath();
    armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    bodycontext2.beginPath();
    bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'x') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'c') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'f') fjump();
        if (event.key == 'e') punch();
        if (event.key == 'w') straightpunch();
        if (event.key == 'q') fock();
        if (event.key == 'd') lowkick();
        if (event.key == 's') middlekick();
        if (event.key == 'a') highkick();
        if (event.key == 'z') elbow();
    });

    const interval = setInterval(function()
    {
        if (fex-60 < fpx+50) punchrange = 1;
        else punchrange = 0;
        if (fex-60 < fpx+60) straightrange = 1;
        else straightrange = 0;
        if (fpx+50 > fex-50) fockrange = 1;
        else fockrange = 0;
        if (fpx+40 > fex-50) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+80 > fex-30)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+80 > fex-60)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+80 > fex-20)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%12 == 0)
        {
            enemypunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            enemystraightpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%10 == 0)
        {
            enemyfock();
        }
        if (elbowrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9 == 0)
        {
            enemyelbow();
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            enemylowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            enemymiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            enemyhighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    flose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                fvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function lowguard()
{
    lguarduse = 1
        var legcanvas = document.getElementById('legplayer');
        var legcontext = legcanvas.getContext('2d');
        var legcanvas2 = document.getElementById('legplayer2');
        var legcontext2 = legcanvas2.getContext('2d');
        var legcanvas3 = document.getElementById('legplayer3');
        var legcontext3 = legcanvas3.getContext('2d');
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+35,fpy+70);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+5,fpy+80);
        legcontext2.stroke();
        legcontext3.beginPath();
        legcontext3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
        legcontext3.moveTo(fpx+35,fpy+70);
        legcontext3.lineTo(fpx+20,fpy+80);
        legcontext3.stroke();
        const interval = setInterval(function() {
        if (fstopflag == 1) return;
        if (lguardflag == 0)
        {
            legcontext3.beginPath();
            legcontext3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            legcontext.beginPath();
            legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
            legcontext.moveTo(fpx+20,fpy+60);
            legcontext.lineTo(fpx+35,fpy+80);
            legcontext.stroke();
            legcontext2.beginPath();
            legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            legcontext2.moveTo(fpx+20,fpy+60);
            legcontext2.lineTo(fpx+5,fpy+80);
            legcontext2.stroke();
            lguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function middleguard()
{
    mguarduse = 1;
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+35,fpy+50);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+10);
        armcontext2.lineTo(fpx+25,fpy+50);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext3.moveTo(fpx+25,fpy+50);
        armcontext3.lineTo(fpx+35,fpy+10);
        armcontext3.stroke();
        const interval = setInterval(function() {
        if (fstopflag == 1) return;
        if (mguardflag == 0)
        {
            armcontext3.beginPath();
            armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+5,fpy+50);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx+35,fpy+50);
            armcontext2.stroke();
            mguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function highguard()
{
    hguarduse = 1;
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+35,fpy-10);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+10);
        armcontext2.lineTo(fpx+45,fpy-5);
        armcontext2.stroke();
        const interval = setInterval(function() {
            if (fstopflag == 1) return;
        if (hguardflag == 0)
        {
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+5,fpy+50);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx+35,fpy+50);
            armcontext2.stroke();
            hguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function enemylowguard()
{
    elguarduse = 1;
        var elegcanvas = document.getElementById('eleg');
        var eleg = elegcanvas.getContext('2d');
        var elegcanvas2 = document.getElementById('eleg2');
        var eleg2 = elegcanvas2.getContext('2d');
        var elegcanvas3 = document.getElementById('eleg3');
        var eleg3 = elegcanvas3.getContext('2d');
        eleg.beginPath();
        eleg.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        eleg.moveTo(fex-20,fey+60);
        eleg.lineTo(fex-5,fey+80);
        eleg.stroke();
        eleg2.beginPath();
        eleg2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        eleg2.moveTo(fex-20,fey+60);
        eleg2.lineTo(fex-35,fey+70);
        eleg2.stroke();
        eleg3.beginPath();
        eleg3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
        eleg3.moveTo(fex-35,fey+70);
        eleg3.lineTo(fex-20,fey+80);
        eleg3.stroke();
        if (fstopflag == 1) return;
        setTimeout(function() {
            eleg3.beginPath();
            eleg3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            eleg.beginPath();
            eleg.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            eleg.moveTo(fex-20,fey+60);
            eleg.lineTo(fex-5,fey+80);
            eleg.stroke();
            eleg2.beginPath();
            eleg2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            eleg2.moveTo(fex-20,fey+60);
            eleg2.lineTo(fex-35,fey+80);
            eleg2.stroke();
            elguarduse = 0;
        }, 300);
}

function enemymiddleguard()
{
    emguarduse = 1;
    var earmcanvas = document.getElementById('earm');
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey);
        earm.lineTo(fex-15,fey+40);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-15,fey+40);
        earm2.lineTo(fex-35,fey);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-20,fey+10);
        earm3.lineTo(fex-30,fey+50);
        earm3.stroke();
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            emguarduse = 0;
        }, 300);
}

function enemyhighguard()
{
    ehguarduse = 1;
    var earmcanvas = document.getElementById('earm');
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+10);
        earm.lineTo(fex-50,fey-10);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-50,fey-20);
        earm2.stroke();
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ehguarduse = 0;
        }, 300);
}

function leftwalk()
{
    if (fstopflag == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }

    if (walkuse == 1)
    {
        return;
    }
    if (fpx < 35)
    {
        return;
    }

    walkuse = 1;
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    if (gamecount == 1) fpx-=10;
    if (gamecount == 2) fpx-=5;
    if (gamecount == 3) fpx-=3;
    if (gamecount == 4) fpx-=3;
    if (gamecount == 5) fpx-=3;
    if (gamecount == 6) fpx-=2;
    if (gamecount == 7) fpx-=2;
    if (gamecount == 8) fpx-=2;
    if (gamecount >= 9) fpx-=1;
    if (fstopflag == 1) return;
    
    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    
    walkuse = 0;
}

function rightwalk()
{
    if (fstopflag == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    if (walkuse == 1)
    {
        return;
    }
    if (fpx > fex-90)
    {
        return;
    }
    walkuse = 1;
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    if (gamecount == 1) fpx+=10;
    if (gamecount == 2) fpx+=5;
    if (gamecount == 3) fpx+=3;
    if (gamecount == 4) fpx+=3;
    if (gamecount == 5) fpx+=3;
    if (gamecount == 6) fpx+=2;
    if (gamecount == 7) fpx+=2;
    if (gamecount == 8) fpx+=2;
    if (gamecount >= 9) fpx+=1;
    if (fstopflag == 1) return;
    
    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    
    walkuse = 0;
}

function enemywalk()
{
    ewalkuse = 1;
    var left = 0;
    var right = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    var random = Math.floor(Math.random() * 10);

    if (random%2 == 0 || random%5 == 0)
    {
        elguardflag = 0;
        fex-=10;
    }
    
    else
    {
        fex+=10;
        elguardflag = 1;
    }
    
    if (fex > 460)
    {
        fex-=10;
        left = 1;
    }

    if (left == 1) fex-=10;

    if (fex < 420) left = 0;

    if (fpx+90 > fex)
    {
        fex+=10;
        right = 1;
    }
    
    if (right == 1) fex+=10;

    if (fpx+130 < fex) right = 0;
    if (fstopflag == 1) return;

    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm4.beginPath();
    earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    ebody2.beginPath();
    ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    ewalkuse = 0;
}

function fjump()
{
    if (fjumpuse == 1 || fstopflag == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    fjumpuse = 1;
    var flag = 0;
    var armcanvas = document.getElementById('armplayer');
    var arm = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var arm2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    var arm3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    var arm4 = armcanvas4.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var body = bodycanvas.getContext('2d');
    var bodycanvas2 = document.getElementById('bodyplayer2');
    var body2 = bodycanvas2.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var leg = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var leg2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var face = facecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (flag == 0)
        {
            fpy-=5;
        }
        if (fpy === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fpy+=5;
        }
        if (fstopflag == 1) return;
        arm3.beginPath();
        arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        arm4.beginPath();
        arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
        body2.beginPath();
        body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
        arm.beginPath();
        arm.clearRect(0,0,armcanvas.width,armcanvas.height);
        arm.moveTo(fpx+20,fpy+20);
        arm.lineTo(fpx+5,fpy+50);
        arm.stroke();
        arm2.beginPath();
        arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        arm2.moveTo(fpx+20,fpy+20);
        arm2.lineTo(fpx+35,fpy+50);
        arm2.stroke();
        body.beginPath();
        body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        body.moveTo(fpx+20,fpy);
        body.lineTo(fpx+20,fpy+60);
        body.stroke();
        leg.beginPath();
        leg.clearRect(0,0,legcanvas.width,legcanvas.height);
        leg.moveTo(fpx+20,fpy+60);
        leg.lineTo(fpx+35,fpy+80);
        leg.stroke();
        leg2.beginPath();
        leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        leg2.moveTo(fpx+20,fpy+60);
        leg2.lineTo(fpx+5,fpy+80);
        leg2.stroke();
        face.beginPath();
        face.clearRect(0,0,facecanvas.width,facecanvas.height);
        face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
        face.stroke();
        if (fpy > 205)
        {
            fjumpuse = 0;
            clearInterval(interval);
        }
      }, 10);

}

function fenemyjump()
{
    ejumpuse = 1;
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (fstopflag == 1) return;
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-20,fey+20);
            earmcontext2.lineTo(fex-5,fey+50);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-20,fey);
            ebodycontext.lineTo(fex-20,fey+60);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-20,fey+60);
            elegcontext.lineTo(fex-5,fey+80);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-20,fey+60);
            elegcontext2.lineTo(fex-35,fey+80);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        if (fey > 205)
        {
            ejumpuse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function punch()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    punchuse = 1;
    setTimeout(function() {
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
    
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx+75,fpy);
        armcontext2.stroke();
    
        if (fpx+60 > fex-50 && fpy < fey+80 && ehguarduse == 0)
        {
            fhitflag = 1;
            if (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
            {
                fhitcount+=2;
            }
            else
            {
                fhitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }
        if (fpx+60 > fex-50 && fpy < fey+80 && ehguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx+35,fpy+50);
            armcontext2.stroke();
            punchuse = 0;
        }, 300);
    }, 100);
}

function enemypunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            rightwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 300);
      }, 100);
}

function straightpunch()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    stpunchuse = 1;
    setTimeout(function() {
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        var bodycanvas = document.getElementById('bodyplayer');
        var bodycontext = bodycanvas.getContext('2d');
        var facecanvas = document.getElementById('faceplayer');
        var facecontext = facecanvas.getContext('2d');
    
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+90,fpy);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx,fpy+30);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        armcontext3.moveTo(fpx,fpy+30);
        armcontext3.lineTo(fpx+25,fpy+25);
        armcontext3.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+25,fpy+5);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+25,fpy-15,20,0,Math.PI*2,true);
        facecontext.stroke();
    
    if (fpx+120 > fex && fpy < fey+80 && ehguarduse == 0)
    {
        fhitflag = 1;
        if (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
        {
            fhitcount+=6;
        }
        else
        {
            fhitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fpy < fey+80 && ehguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+5,fpy+50);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx+35,fpy+50);
        armcontext2.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+20,fpy);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
        facecontext.stroke();
        stpunchuse = 0;
        }, 800);
    }, 300);
}

function enemystraightpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 800);
    }, 300);
}

function fock()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            return;
        }
        fpunchuse = 1;
        setTimeout(function() {
            var armcanvas = document.getElementById('armplayer');
            var armcontext = armcanvas.getContext('2d');
            var armcanvas2 = document.getElementById('armplayer2');
            var armcontext2 = armcanvas2.getContext('2d');
            var armcanvas3 = document.getElementById('armplayer3');
            var armcontext3 = armcanvas3.getContext('2d');
            var armcanvas4 = document.getElementById('armplayer4');
            var armcontext4 = armcanvas4.getContext('2d');
            var bodycanvas = document.getElementById('bodyplayer');
            var bodycontext = bodycanvas.getContext('2d');
            var facecanvas = document.getElementById('faceplayer');
            var facecontext = facecanvas.getContext('2d');
        
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+50,fpy-5);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx,fpy+30);
            armcontext2.stroke();
            armcontext3.beginPath();
            armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            armcontext3.moveTo(fpx,fpy+30);
            armcontext3.lineTo(fpx+25,fpy+25);
            armcontext3.stroke();
            armcontext4.beginPath();
            armcontext4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            armcontext4.moveTo(fpx+50,fpy-5);
            armcontext4.lineTo(fpx+70,fpy);
            armcontext4.stroke();
            bodycontext.beginPath();
            bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            bodycontext.moveTo(fpx+25,fpy+5);
            bodycontext.lineTo(fpx+20,fpy+60);
            bodycontext.stroke();
            facecontext.beginPath();
            facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
            facecontext.arc(fpx+25,fpy-15,20,0,Math.PI*2,true);
            facecontext.stroke();
        
        if (fpx+50 > fex-50 && fpy < fey+80 && ehguarduse == 0)
        {
            fhitflag = 1;
            if (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
            {
                fhitcount+=6;
            }
            else
            {
                fhitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }

        if (fpx+50 > fex-50 && fpy < fey+80 && ehguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            armcontext3.beginPath();
            armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            armcontext4.beginPath();
            armcontext4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+5,fpy+50);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx+35,fpy+50);
            armcontext2.stroke();
            bodycontext.beginPath();
            bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            bodycontext.moveTo(fpx+20,fpy);
            bodycontext.lineTo(fpx+20,fpy+60);
            bodycontext.stroke();
            facecontext.beginPath();
            facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
            facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            facecontext.stroke();
            fpunchuse = 0;
            }, 300);
        }, 100);
}

function enemyfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            leftwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 300);
        }, 100);
}

function elbow()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
        elbowuse = 1;
        setTimeout(function() {
            var armcanvas = document.getElementById('armplayer');
            var armcontext = armcanvas.getContext('2d');
            var armcanvas2 = document.getElementById('armplayer2');
            var armcontext2 = armcanvas2.getContext('2d');
            var armcanvas3 = document.getElementById('armplayer3');
            var armcontext3 = armcanvas3.getContext('2d');
            var armcanvas4 = document.getElementById('armplayer4');
            var armcontext4 = armcanvas4.getContext('2d');
            var bodycanvas = document.getElementById('bodyplayer');
            var bodycontext = bodycanvas.getContext('2d');
            var facecanvas = document.getElementById('faceplayer');
            var facecontext = facecanvas.getContext('2d');
        
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+50,fpy-5);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx,fpy+30);
            armcontext2.stroke();
            armcontext3.beginPath();
            armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            armcontext3.moveTo(fpx,fpy+30);
            armcontext3.lineTo(fpx+25,fpy+25);
            armcontext3.stroke();
            armcontext4.beginPath();
            armcontext4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            armcontext4.moveTo(fpx+50,fpy-5);
            armcontext4.lineTo(fpx+40,fpy+25);
            armcontext4.stroke();
            bodycontext.beginPath();
            bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            bodycontext.moveTo(fpx+25,fpy+5);
            bodycontext.lineTo(fpx+20,fpy+60);
            bodycontext.stroke();
            facecontext.beginPath();
            facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
            facecontext.arc(fpx+25,fpy-15,20,0,Math.PI*2,true);
            facecontext.stroke();
        
        if (fpx+50 > fex-40 && fpy < fey+80 && ehguarduse == 0)
        {
            fhitflag = 1;
            if (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
            {
                fhitcount+=8;
            }
            else
            {
                fhitcount+=4;
            }
            document.getElementById('elbow_audio').currentTime = 0;
            document.getElementById('elbow_audio').play();
            var random = Math.floor(Math.random() * 10) + 1;
            if (random == 4) eblood = 1;
        }
        if (fpx+50 > fex-40 && fpy < fey+80 && ehguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            armcontext3.beginPath();
            armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            armcontext4.beginPath();
            armcontext4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            armcontext.beginPath();
            armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
            armcontext.moveTo(fpx+20,fpy+20);
            armcontext.lineTo(fpx+5,fpy+50);
            armcontext.stroke();
            armcontext2.beginPath();
            armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            armcontext2.moveTo(fpx+20,fpy+20);
            armcontext2.lineTo(fpx+35,fpy+50);
            armcontext2.stroke();
            bodycontext.beginPath();
            bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            bodycontext.moveTo(fpx+20,fpy);
            bodycontext.lineTo(fpx+20,fpy+60);
            bodycontext.stroke();
            facecontext.beginPath();
            facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
            facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            facecontext.stroke();
            elbowuse = 0;
            }, 300);
        }, 100);
}

function enemyelbow()
{
    eelbowuse = 1;
        setTimeout(function() {
        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-45,fey+25);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=8;
            }
            else
            {
                fehitcount+=4;
            }
            document.getElementById('elbow_audio').currentTime = 0;
            document.getElementById('elbow_audio').play();
            var random = Math.floor(Math.random() * 10) + 1;
            if (random == 4) blood = 1;
        }
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            leftwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            eelbowuse = 0;
            }, 300);
        }, 100);
}

function lowkick()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    lowkickuse = 1;
    setTimeout(function() {
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        var bodycanvas = document.getElementById('bodyplayer');
        var bodycontext = bodycanvas.getContext('2d');
        var legcanvas = document.getElementById('legplayer');
        var legcontext = legcanvas.getContext('2d');
        var legcanvas2 = document.getElementById('legplayer2');
        var legcontext2 = legcanvas2.getContext('2d');
        var facecanvas = document.getElementById('faceplayer');
        var facecontext = facecanvas.getContext('2d');
    
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+12,fpy+5);
        armcontext.lineTo(fpx+6,fpy+30);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+6,fpy+30);
        armcontext2.lineTo(fpx+30,fpy-20);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext3.moveTo(fpx+13,fpy+10);
        armcontext3.lineTo(fpx+50,fpy+15);
        armcontext3.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+65);
        legcontext.lineTo(fpx+100,fpy+63);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+15,fpy+80);
        legcontext2.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+10,fpy-10);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+15,fpy-30,20,0,Math.PI*2,true);
        facecontext.stroke();
    
    if (fpx+80 > fex-30 && fpy+63 < fey + 80 && elguarduse == 0)
    {
        fhitflag = 1;
        lowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (lowhit < 6 && (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1))
        {
            fhitcount+=4;
        }
        else if (lowhit >= 6 && (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1))
        {
            fhitcount+=12;
        }
        else if (lowhit < 6)
        {
            fhitcount+=2;
        }
        else if (lowhit >= 6)
        {
            fhitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fpy+63 < fey+80 && elguarduse == 1)
    {
        fehitflag = 1;
        fehitcount+=2;
        elowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+5,fpy+50);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx+35,fpy+50);
        armcontext2.stroke();
        armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+20,fpy);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+35,fpy+80);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+5,fpy+80);
        legcontext2.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
        facecontext.stroke();
        lowkickuse = 0;
        }, 600);
    }, 300);       
}

function enemylowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 600);
    }, 300);       
}

function middlekick()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    middlekickuse = 1;
    setTimeout(function() {
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        var bodycanvas = document.getElementById('bodyplayer');
        var bodycontext = bodycanvas.getContext('2d');
        var legcanvas = document.getElementById('legplayer');
        var legcontext = legcanvas.getContext('2d');
        var legcanvas2 = document.getElementById('legplayer2');
        var legcontext2 = legcanvas2.getContext('2d');
        var facecanvas = document.getElementById('faceplayer');
        var facecontext = facecanvas.getContext('2d');
    
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+8,fpy+5);
        armcontext.lineTo(fpx+2,fpy+30);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+2,fpy+30);
        armcontext2.lineTo(fpx+23,fpy-20);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext3.moveTo(fpx+9,fpy+10);
        armcontext3.lineTo(fpx+40,fpy+15);
        armcontext3.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+120,fpy+30);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+15,fpy+80);
        legcontext2.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+5,fpy-10);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+8,fpy-30,20,0,Math.PI*2,true);
        facecontext.stroke();
    
    if (fpx+80 > fex-60 && fpy+30 < fey+80 && emguarduse == 0)
    {
        fhitflag = 1;
        if (epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
        {
            fhitcount+=8;
        }
        else
        {
            fhitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fpy+30 < fey+80 && emguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+5,fpy+50);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx+35,fpy+50);
        armcontext2.stroke();
        armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+20,fpy);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+35,fpy+80);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+5,fpy+80);
        legcontext2.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
        facecontext.stroke();
        middlekickuse = 0;
        }, 800);
    }, 400);
}

function enemymiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 800);
    }, 400);       
}

function highkick()
{
    if (fstopflag == 1 || fjumpuse == 1 || punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
    {
        return;
    }
    highkickuse = 1;
    setTimeout(function() {
        var armcanvas = document.getElementById('armplayer');
        var armcontext = armcanvas.getContext('2d');
        var armcanvas2 = document.getElementById('armplayer2');
        var armcontext2 = armcanvas2.getContext('2d');
        var armcanvas3 = document.getElementById('armplayer3');
        var armcontext3 = armcanvas3.getContext('2d');
        var bodycanvas = document.getElementById('bodyplayer');
        var bodycontext = bodycanvas.getContext('2d');
        var bodycanvas2 = document.getElementById('bodyplayer2');
        var bodycontext2 = bodycanvas2.getContext('2d');
        var legcanvas = document.getElementById('legplayer');
        var legcontext = legcanvas.getContext('2d');
        var legcanvas2 = document.getElementById('legplayer2');
        var legcontext2 = legcanvas2.getContext('2d');
        var facecanvas = document.getElementById('faceplayer');
        var facecontext = facecanvas.getContext('2d');
    
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+12,fpy+5);
        armcontext.lineTo(fpx-5,fpy+40);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx-5,fpy+40);
        armcontext2.lineTo(fpx+40,fpy-20);
        armcontext2.stroke();
        armcontext3.beginPath();
        armcontext3.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext3.moveTo(fpx+13,fpy+10);
        armcontext3.lineTo(fpx+40,fpy+15);
        armcontext3.stroke();
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+65,fpy-10);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+15,fpy+80);
        legcontext2.stroke();
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+15,fpy-10);
        bodycontext.lineTo(fpx+10,fpy+25);
        bodycontext.stroke();
        bodycontext2.beginPath();
        bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
        bodycontext2.moveTo(fpx+10,fpy+25);
        bodycontext2.lineTo(fpx+20,fpy+60);
        bodycontext2.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+20,fpy-30,20,0,Math.PI*2,true);
        facecontext.stroke();
    
    if (fpx+80 > fex-20 && ehguarduse == 0)
    {
        fhitflag = 1;
        if (epunchuse == 0 || estpunchuse == 1 || efpunchuse == 1 ||eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
        {
            fhitcount+=20;
        }
        else
        {
            fhitcount+=10;
        }
        document.getElementById('highkick_audio').currentTime = 0;
        document.getElementById('highkick_audio').play();
    }
    if (fpx+80 > fex-20 && ehguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fpx+80 > fex-20 && fey < 200)
    {
        fhitflag = 1;
        fhitcount = 42;
        document.getElementById('teen_audio').currentTime = 0;
        document.getElementById('teen_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        armcontext.beginPath();
        armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
        armcontext.moveTo(fpx+20,fpy+20);
        armcontext.lineTo(fpx+5,fpy+50);
        armcontext.stroke();
        armcontext2.beginPath();
        armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
        armcontext2.moveTo(fpx+20,fpy+20);
        armcontext2.lineTo(fpx+35,fpy+50);
        armcontext2.stroke();
        armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
        bodycontext.beginPath();
        bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
        bodycontext.moveTo(fpx+20,fpy);
        bodycontext.lineTo(fpx+20,fpy+60);
        bodycontext.stroke();
        bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
        legcontext.beginPath();
        legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
        legcontext.moveTo(fpx+20,fpy+60);
        legcontext.lineTo(fpx+35,fpy+80);
        legcontext.stroke();
        legcontext2.beginPath();
        legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
        legcontext2.moveTo(fpx+20,fpy+60);
        legcontext2.lineTo(fpx+5,fpy+80);
        legcontext2.stroke();
        facecontext.beginPath();
        facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
        facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
        facecontext.stroke();
        highkickuse = 0;
        }, 1500);
    }, 1000);
}

function enemyhighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=20;
            }
            else
            {
                fehitcount+=10;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            rightwalk();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1500);
    }, 1000);       
}

function flose()
{
    losecount++;
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var armcanvas = document.getElementById('armplayer');
    var arm = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var arm2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    var arm3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    var arm4 = armcanvas4.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var body = bodycanvas.getContext('2d');
    var bodycanvas2 = document.getElementById('bodyplayer2');
    var body2 = bodycanvas2.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var leg = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var leg2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    var leg3 = legcanvas3.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var face = facecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fpx > 20) fpx-=5;
        if (flag == 0)
        {
            fpy-=5;
        }
        if (fpy === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fpy+=5;
        }
        if (flag == 0)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy+5);
            arm.lineTo(fpx+70,fpy+45);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy+5);
            arm2.lineTo(fpx+100,fpy+20);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-10);
            body.lineTo(fpx+100,fpy+40);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+100,fpy+40);
            leg.lineTo(fpx+95,fpy+60);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+100,fpy+40);
            leg2.lineTo(fpx+130,fpy+45);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (flag == 1)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy-20);
            arm.lineTo(fpx+75,fpy-35);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy-20);
            arm2.lineTo(fpx+75,fpy-5);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-20);
            body.lineTo(fpx+120,fpy-20);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+120,fpy-20);
            leg.lineTo(fpx+135,fpy-5);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+120,fpy-20);
            leg2.lineTo(fpx+135,fpy-35);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (fpy > 275)
        {
            document.getElementById('youlose_audio').currentTime = 0;
            document.getElementById('youlose_audio').play();
            if (losecount < 3)
            {
                document.getElementById("result").innerText = '敗北';
                frestartflag = 1;
                const rebutton = document.getElementById('restartbutton');
                rebutton.style.display = 'block';
                clearInterval(interval);
            }
            if (losecount == 3)
            {
                newoneflag = 0;
                newtwoflag = 0;
                newthreeflag = 0;
                newfourflag = 0;
                document.getElementById('saiya_audio').pause();
                document.getElementById('ject_audio').pause();
                document.getElementById('name_audio').pause();
                document.getElementById('rugal_audio').pause();
                document.getElementById("result").innerText = 'ゲームオーバー';
                var gauge = document.getElementById('gauge');
                gauge.style.display = 'none';
                var redgauge = document.getElementById('redgauge');
                redgauge.style.display = 'none';
                var gauge2 = document.getElementById('gauge2');
                gauge2.style.display = 'none';
                var redgauge2 = document.getElementById('redgauge2');
                redgauge2.style.display = 'none';
                const hbutton = document.getElementById('hard');
                hbutton.style.display = 'block';
                const nbutton = document.getElementById('normal');
                nbutton.style.display = 'block';
                const ebutton = document.getElementById('easy');
                ebutton.style.display = 'block';
                frestartflag = 1;
                losecount = 0;
                clearInterval(interval);
            }
        }
      }, 100);
}

function fvictory()
{
    document.getElementById('saiya_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const secondbutton = document.getElementById('secondbutton');
            secondbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function restart()
{
    if (stagecount == 1) fightstart();
    if (stagecount == 2) secondstart();
    if (stagecount == 3) threestart();
    if (stagecount == 4) fourstart();
}

function secondstart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ebstpunchuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 2;
    
    if (newtwoflag == 0) document.getElementById('ject_audio').currentTime = 0;
    document.getElementById('ject_audio').volume = 0.3;
    document.getElementById('ject_audio').play();
    document.getElementById('ject_audio').loop = true;
    newtwoflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const secondbutton = document.getElementById('secondbutton');
    secondbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'x') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'c') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'f') fjump();
        if (event.key == 'e') punch();
        if (event.key == 'w') straightpunch();
        if (event.key == 'q') fock();
        if (event.key == 'd') lowkick();
        if (event.key == 's') middlekick();
        if (event.key == 'a') highkick();
        if (event.key == 'z') elbow();
    });

    const interval = setInterval(function()
    {
        if (fex-60 < fpx+50) punchrange = 1;
        else punchrange = 0;
        if (fex-60 < fpx+60) straightrange = 1;
        else straightrange = 0;
        if (fpx+50 > fex-50) fockrange = 1;
        else fockrange = 0;
        if (fpx+80 > fex-30)
        {
            lowguardrange = 1;
        }
        else
        {
            lowguardrange = 0;
        }
        if (fpx+80 > fex-60)
        {
            middleguardrange = 1;
        }
        else
        {
            middleguardrange = 0;
        }
        if (fpx+80 > fex-20)
        {
            highguardrange = 1;
        }
        else
        {
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9== 0)
        {
            secondbodystpunch();
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            secondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7== 0)
        {
            secondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            secondfock();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ebstpunchuse == 0 &&  ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && ebstpunchuse == 0 &&  eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    flose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                secondvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function secondpunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            rightwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 100);
      }, 100);
}

function secondstpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 600);
    }, 400);
}

function secondfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            leftwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 200);
        }, 100);
}

function secondbodystpunch()
{
    ebstpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-100,fey+30);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=4;
        }
        else
        {
            fehitcount+=2;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        ebstpunchuse = 0;
      }, 600);
    }, 400);
}

function secondvictory()
{
    document.getElementById('ject_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById('ject_audio').pause();
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const threebutton = document.getElementById('threebutton');
            threebutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function threestart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 3;

    if (newthreeflag == 0) document.getElementById('name_audio').currentTime = 0;
    document.getElementById('name_audio').volume = 0.3;
    document.getElementById('name_audio').play();
    document.getElementById('name_audio').loop = true;
    newthreeflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('threebutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'x') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'c') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'f') fjump();
        if (event.key == 'e') punch();
        if (event.key == 'w') straightpunch();
        if (event.key == 'q') fock();
        if (event.key == 'd') lowkick();
        if (event.key == 's') middlekick();
        if (event.key == 'a') highkick();
        if (event.key == 'z') elbow();
    });

    const interval = setInterval(function()
    {
        if (fex-60 < fpx+50) punchrange = 1;
        else punchrange = 0;
        if (fex-60 < fpx+60) straightrange = 1;
        else straightrange = 0;
        if (fpx+50 > fex-50) fockrange = 1;
        else fockrange = 0;
        if (fpx+40 > fex-50) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+80 > fex-30)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+80 > fex-60)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+80 > fex-20)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            threelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            threemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            threehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    flose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                threevictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function threelowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 400);
    }, 200);       
}

function threemiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
        rightwalk();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 500);
    }, 300);       
}

function threehighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=20;
            }
            else
            {
                fehitcount+=10;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            rightwalk();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1000);
    }, 700);       
}

function threevictory()
{
    document.getElementById('name_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const fourbutton = document.getElementById('fourbutton');
            fourbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function fourstart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    ebstpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 4;

    if (newfourflag == 0) document.getElementById('rugal_audio').currentTime = 0;
    document.getElementById('rugal_audio').volume = 0.3;
    document.getElementById('rugal_audio').play();
    document.getElementById('rugal_audio').loop = true;
    newfourflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('fourbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'x') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'c') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'f') fjump();
        if (event.key == 'e') punch();
        if (event.key == 'w') straightpunch();
        if (event.key == 'q') fock();
        if (event.key == 'd') lowkick();
        if (event.key == 's') middlekick();
        if (event.key == 'a') highkick();
        if (event.key == 'z') elbow();
    });

    const interval = setInterval(function()
    {
        if (fex-60 < fpx+50) punchrange = 1;
        else punchrange = 0;
        if (fex-60 < fpx+60) straightrange = 1;
        else straightrange = 0;
        if (fpx+50 > fex-50) fockrange = 1;
        else fockrange = 0;
        if (fpx+40 > fex-50) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+80 > fex-30)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+80 > fex-60)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+80 > fex-20)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%12 == 0)
        {
            secondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            secondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%10 == 0)
        {
            secondfock();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9 == 0)
        {
            secondbodystpunch();
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            threelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            threemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            threehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    flose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                fourvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function fourvictory()
{
    document.getElementById('rugal_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = 'クリア';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const endbutton = document.getElementById('endbutton');
            endbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function endingstart()
{
    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';
    const endbutton = document.getElementById('endbutton');
    endbutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = '';
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
    gcontext.beginPath();
    gcontext.clearRect(0,0,gauge.width,gauge.height);
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);

    const texts = document.querySelectorAll('.endlole');
    let currentTextIndex = 0;
    document.getElementById('sperubire_audio').currentTime = 0;
    document.getElementById('sperubire_audio').volume = 0.2;
    document.getElementById('sperubire_audio').play();
    animateText(texts[currentTextIndex]);
    
    function animateText(textElement)
    {
        textElement.style.display = 'block';
        if (currentTextIndex == texts.length-1)
        {
            textElement.style.animation = 'moveLast 5s linear forwards';
        }
        else
        {
            textElement.style.animation = 'moveDown 5s linear';
        }


        textElement.addEventListener('animationend', () => {
            if (currentTextIndex < texts.length-1)
            {
                textElement.style.display = 'none';
                textElement.style.animation = 'none';
                currentTextIndex++;
                animateText(texts[currentTextIndex]);
            }
        }, { once: true });
    }
}

function normalstart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 1;
    
    if (newoneflag == 0) document.getElementById('saiya_audio').currentTime = 0;
    document.getElementById('saiya_audio').volume = 0.5;
    document.getElementById('saiya_audio').play();
    document.getElementById('saiya_audio').loop = true;
    newoneflag = 1;

    var gauge = document.getElementById('gauge');
    gauge.style.display = 'block';
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    redgauge.style.display = 'block';
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    gauge2.style.display = 'block';
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    redgauge2.style.display = 'block';
    var redgcontext2 = redgauge2.getContext('2d');
    const hard = document.getElementById('hard');
    hard.style.display = 'none';
    const normal = document.getElementById('normal');
    normal.style.display = 'none';
    const easy = document.getElementById('easy');
    easy.style.display = 'none';
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';
    const rbutton = document.getElementById('buttlerestartbutton');
    rbutton.style.display = 'none';
    const bu = document.getElementById('battle');
    bu.style.display = 'none';

    document.getElementById('select_audio').pause();

    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = 'キー設定<br>矢印左-->左に移動と上段ガード&emsp;矢印右-->右に移動<br>E-->ストレート&emsp;W-->フック<br>D-->ミドルキック&emsp;S-->ハイキック<br>Q-->中段ガード&emsp;A-->下段ガード';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    armcanvas.style.display = 'block';
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    armcanvas2.style.display = 'block';
    var armcontext2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    armcanvas3.style.display = 'block';
    var armcontext3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    armcanvas4.style.display = 'block';
    var bodycanvas2 = document.getElementById('bodyplayer2');
    bodycanvas2.style.display = 'block';
    var bodycontext2 = bodycanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    bodycanvas.style.display = 'block';
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    legcanvas.style.display = 'block';
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    legcanvas2.style.display = 'block';
    var legcontext2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    legcanvas3.style.display = 'block';
    var facecanvas = document.getElementById('faceplayer');
    facecanvas.style.display = 'block';
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    earmcanvas.style.display = 'block';
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    earmcanvas2.style.display = 'block';
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    earmcanvas3.style.display = 'block';
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    earmcanvas4.style.display = 'block';
    var ebodycanvas = document.getElementById('ebody');
    ebodycanvas.style.display = 'block';
    var ebodycanvas2 = document.getElementById('ebody2');
    ebodycanvas2.style.display = 'block';
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    elegcanvas.style.display = 'block';
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    elegcanvas2.style.display = 'block';
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    elegcanvas3.style.display = 'block';
    var efacecanvas = document.getElementById('eface');
    efacecanvas.style.display = 'block';
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    armcontext3.beginPath();
    armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    bodycontext2.beginPath();
    bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'q') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'a') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') fock();
        if (event.key == 'd') middlekick();
        if (event.key == 's') highkick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+120 > fex-120)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            nenemystraightpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%10 == 0)
        {
            nenemyfock();
        }
        
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            nenemymiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            nenemyhighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    nflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                nfvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function nenemypunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 500);
      }, 200);
}

function nenemystraightpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 1000);
    }, 500);
}

function nenemyfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 500);
        }, 300);
}

function nenemyelbow()
{
    eelbowuse = 1;
        setTimeout(function() {
        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-45,fey+25);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=8;
            }
            else
            {
                fehitcount+=4;
            }
            document.getElementById('elbow_audio').currentTime = 0;
            document.getElementById('elbow_audio').play();
            var random = Math.floor(Math.random() * 10) + 1;
            if (random == 4) blood = 1;
        }
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            eelbowuse = 0;
            }, 500);
        }, 300);
}

function nenemylowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 800);
    }, 500);       
}

function nenemymiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 1000);
    }, 600);       
}

function nenemyhighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=14;
            }
            else
            {
                fehitcount+=7;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1700);
    }, 1200);       
}

function nflose()
{
    losecount++;
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var armcanvas = document.getElementById('armplayer');
    var arm = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var arm2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    var arm3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    var arm4 = armcanvas4.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var body = bodycanvas.getContext('2d');
    var bodycanvas2 = document.getElementById('bodyplayer2');
    var body2 = bodycanvas2.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var leg = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var leg2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    var leg3 = legcanvas3.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var face = facecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fpx > 20) fpx-=5;
        if (flag == 0)
        {
            fpy-=5;
        }
        if (fpy === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fpy+=5;
        }
        if (flag == 0)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy+5);
            arm.lineTo(fpx+70,fpy+45);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy+5);
            arm2.lineTo(fpx+100,fpy+20);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-10);
            body.lineTo(fpx+100,fpy+40);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+100,fpy+40);
            leg.lineTo(fpx+95,fpy+60);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+100,fpy+40);
            leg2.lineTo(fpx+130,fpy+45);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (flag == 1)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy-20);
            arm.lineTo(fpx+75,fpy-35);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy-20);
            arm2.lineTo(fpx+75,fpy-5);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-20);
            body.lineTo(fpx+120,fpy-20);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+120,fpy-20);
            leg.lineTo(fpx+135,fpy-5);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+120,fpy-20);
            leg2.lineTo(fpx+135,fpy-35);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (fpy > 275)
        {
            document.getElementById('youlose_audio').currentTime = 0;
            document.getElementById('youlose_audio').play();
            if (losecount < 3)
            {
                document.getElementById("result").innerText = '敗北';
                frestartflag = 1;
                const rebutton = document.getElementById('nrestartbutton');
                rebutton.style.display = 'block';
                clearInterval(interval);
            }
            if (losecount == 3)
            {
                newoneflag = 0;
                newtwoflag = 0;
                newthreeflag = 0;
                newfourflag = 0;
                document.getElementById('saiya_audio').pause();
                document.getElementById('ject_audio').pause();
                document.getElementById('name_audio').pause();
                document.getElementById('rugal_audio').pause();
                document.getElementById("result").innerText = 'ゲームオーバー';
                var gauge = document.getElementById('gauge');
                gauge.style.display = 'none';
                var redgauge = document.getElementById('redgauge');
                redgauge.style.display = 'none';
                var gauge2 = document.getElementById('gauge2');
                gauge2.style.display = 'none';
                var redgauge2 = document.getElementById('redgauge2');
                redgauge2.style.display = 'none';
                const hbutton = document.getElementById('hard');
                hbutton.style.display = 'block';
                const nbutton = document.getElementById('normal');
                nbutton.style.display = 'block';
                const ebutton = document.getElementById('easy');
                ebutton.style.display = 'block';
                frestartflag = 1;
                losecount = 0;
                clearInterval(interval);
            }
        }
      }, 100);
}

function nfvictory()
{
    document.getElementById('saiya_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const secondbutton = document.getElementById('nsecondbutton');
            secondbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function nrestart()
{
    if (stagecount == 1) normalstart();
    if (stagecount == 2) nsecondstart();
    if (stagecount == 3) nthreestart();
    if (stagecount == 4) nfourstart();
}

function nsecondstart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ebstpunchuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 2;
    
    if (newtwoflag == 0) document.getElementById('ject_audio').currentTime = 0;
    document.getElementById('ject_audio').volume = 0.3;
    document.getElementById('ject_audio').play();
    document.getElementById('ject_audio').loop = true;
    newtwoflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const secondbutton = document.getElementById('nsecondbutton');
    secondbutton.style.display = 'none';
    const rebutton = document.getElementById('nrestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'q') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'a') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') fock();
        if (event.key == 'd') middlekick();
        if (event.key == 's') highkick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120)
        {
            lowguardrange = 1;
        }
        else
        {
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middleguardrange = 1;
        }
        else
        {
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highguardrange = 1;
        }
        else
        {
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9== 0)
        {
            nsecondbodystpunch();
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            nsecondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7== 0)
        {
            nsecondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            nsecondfock();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ebstpunchuse == 0 &&  ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && ebstpunchuse == 0 &&  eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    nflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                nsecondvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function nsecondpunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 200);
      }, 100);
}

function nsecondstpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 700);
    }, 400);
}

function nsecondfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 300);
        }, 200);
}

function nsecondbodystpunch()
{
    ebstpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-100,fey+30);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=4;
        }
        else
        {
            fehitcount+=2;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        ebstpunchuse = 0;
      }, 700);
    }, 400);
}

function nsecondvictory()
{
    document.getElementById('ject_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById('ject_audio').pause();
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const threebutton = document.getElementById('nthreebutton');
            threebutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function nthreestart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 3;

    if (newthreeflag == 0) document.getElementById('name_audio').currentTime = 0;
    document.getElementById('name_audio').volume = 0.3;
    document.getElementById('name_audio').play();
    document.getElementById('name_audio').loop = true;
    newthreeflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('nthreebutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('nrestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'q') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'a') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') fock();
        if (event.key == 'd') middlekick();
        if (event.key == 's') highkick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+120 > fex-120)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            nthreelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            nthreemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            nthreehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    nflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                nthreevictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function nthreelowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 700);
    }, 300);       
}

function nthreemiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 800);
    }, 400);       
}

function nthreehighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=14;
            }
            else
            {
                fehitcount+=7;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1100);
    }, 900);       
}

function nthreevictory()
{
    document.getElementById('name_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const fourbutton = document.getElementById('nfourbutton');
            fourbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function nfourstart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 4;

    if (newfourflag == 0) document.getElementById('rugal_audio').currentTime = 0;
    document.getElementById('rugal_audio').volume = 0.3;
    document.getElementById('rugal_audio').play();
    document.getElementById('rugal_audio').loop = true;
    newfourflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('nfourbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('nrestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'q') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'a') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') fock();
        if (event.key == 'd') middlekick();
        if (event.key == 's') highkick();
    });

    const interval = setInterval(function()
    {
        if (fex-80 < fpx+80) punchrange = 1;
        else punchrange = 0;
        if (fex-80 < fpx+80) straightrange = 1;
        else straightrange = 0;
        if (fpx+80 > fex-80) fockrange = 1;
        else fockrange = 0;
        if (fpx+80 > fex-80) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+80 > fex-80)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+80 > fex-80)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+80 > fex-80)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%12 == 0)
        {
            nsecondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            nsecondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%10 == 0)
        {
            nsecondfock();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9 == 0)
        {
            nsecondbodystpunch();
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            nthreelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            nthreemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            nthreehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    nflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                nfourvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function nfourvictory()
{
    document.getElementById('rugal_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = 'クリア';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const endbutton = document.getElementById('endbutton');
            endbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function easystart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 1;
    
    if (newoneflag == 0) document.getElementById('saiya_audio').currentTime = 0;
    document.getElementById('saiya_audio').volume = 0.5;
    document.getElementById('saiya_audio').play();
    document.getElementById('saiya_audio').loop = true;
    newoneflag = 1;

    var gauge = document.getElementById('gauge');
    gauge.style.display = 'block';
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    redgauge.style.display = 'block';
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    gauge2.style.display = 'block';
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    redgauge2.style.display = 'block';
    var redgcontext2 = redgauge2.getContext('2d');
    const hard = document.getElementById('hard');
    hard.style.display = 'none';
    const normal = document.getElementById('normal');
    normal.style.display = 'none';
    const easy = document.getElementById('easy');
    easy.style.display = 'none';
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';
    const rbutton = document.getElementById('buttlerestartbutton');
    rbutton.style.display = 'none';
    const bu = document.getElementById('battle');
    bu.style.display = 'none';

    document.getElementById('select_audio').pause();

    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = 'キー設定<br>矢印左-->左に移動と上段ガード&emsp;矢印右-->右に移動<br>E-->ストレート&emsp;W-->ミドルキック<br>D-->中段ガード&emsp;S-->下段ガード';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    armcanvas.style.display = 'block';
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    armcanvas2.style.display = 'block';
    var armcontext2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    armcanvas3.style.display = 'block';
    var armcontext3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    armcanvas4.style.display = 'block';
    var bodycanvas2 = document.getElementById('bodyplayer2');
    bodycanvas2.style.display = 'block';
    var bodycontext2 = bodycanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    bodycanvas.style.display = 'block';
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    legcanvas.style.display = 'block';
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    legcanvas2.style.display = 'block';
    var legcontext2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    legcanvas3.style.display = 'block';
    var facecanvas = document.getElementById('faceplayer');
    facecanvas.style.display = 'block';
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    earmcanvas.style.display = 'block';
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    earmcanvas2.style.display = 'block';
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    earmcanvas3.style.display = 'block';
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    earmcanvas4.style.display = 'block';
    var ebodycanvas = document.getElementById('ebody');
    ebodycanvas.style.display = 'block';
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    ebodycanvas2.style.display = 'block';
    var elegcanvas = document.getElementById('eleg');
    elegcanvas.style.display = 'block';
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    elegcanvas2.style.display = 'block';
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    elegcanvas3.style.display = 'block';
    var efacecanvas = document.getElementById('eface');
    efacecanvas.style.display = 'block';
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    armcontext3.beginPath();
    armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    bodycontext2.beginPath();
    bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'd') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 's') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') middlekick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+120 > fex-120)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            eenemystraightpunch();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            eenemymiddlekick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    eflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                efvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function eenemypunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 500);
      }, 200);
}

function eenemystraightpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 1200);
    }, 600);
}

function eenemyfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 700);
        }, 500);
}

function eenemyelbow()
{
    eelbowuse = 1;
        setTimeout(function() {
        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-45,fey+25);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=8;
            }
            else
            {
                fehitcount+=4;
            }
            document.getElementById('elbow_audio').currentTime = 0;
            document.getElementById('elbow_audio').play();
            var random = Math.floor(Math.random() * 10) + 1;
            if (random == 4) blood = 1;
        }
        if (fpx+40 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            eelbowuse = 0;
            }, 600);
        }, 300);
}

function eenemylowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 1000);
    }, 600);       
}

function eenemymiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 1200);
    }, 700);       
}

function eenemyhighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=14;
            }
            else
            {
                fehitcount+=7;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1900);
    }, 1300);       
}

function eflose()
{
    losecount++;
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var armcanvas = document.getElementById('armplayer');
    var arm = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var arm2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    var arm3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    var arm4 = armcanvas4.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var body = bodycanvas.getContext('2d');
    var bodycanvas2 = document.getElementById('bodyplayer2');
    var body2 = bodycanvas2.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var leg = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var leg2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    var leg3 = legcanvas3.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var face = facecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fpx > 20) fpx-=5;
        if (flag == 0)
        {
            fpy-=5;
        }
        if (fpy === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fpy+=5;
        }
        if (flag == 0)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy+5);
            arm.lineTo(fpx+70,fpy+45);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy+5);
            arm2.lineTo(fpx+100,fpy+20);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-10);
            body.lineTo(fpx+100,fpy+40);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+100,fpy+40);
            leg.lineTo(fpx+95,fpy+60);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+100,fpy+40);
            leg2.lineTo(fpx+130,fpy+45);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (flag == 1)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy-20);
            arm.lineTo(fpx+75,fpy-35);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy-20);
            arm2.lineTo(fpx+75,fpy-5);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-20);
            body.lineTo(fpx+120,fpy-20);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+120,fpy-20);
            leg.lineTo(fpx+135,fpy-5);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+120,fpy-20);
            leg2.lineTo(fpx+135,fpy-35);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (fpy > 275)
        {
            document.getElementById('youlose_audio').currentTime = 0;
            document.getElementById('youlose_audio').play();
            if (losecount < 3)
            {
                document.getElementById("result").innerText = '敗北';
                frestartflag = 1;
                const rebutton = document.getElementById('erestartbutton');
                rebutton.style.display = 'block';
                clearInterval(interval);
            }
            if (losecount == 3)
            {
                newoneflag = 0;
                newtwoflag = 0;
                newthreeflag = 0;
                newfourflag = 0;
                document.getElementById('saiya_audio').pause();
                document.getElementById('ject_audio').pause();
                document.getElementById('name_audio').pause();
                document.getElementById('rugal_audio').pause();
                document.getElementById("result").innerText = 'ゲームオーバー';
                var gauge = document.getElementById('gauge');
                gauge.style.display = 'none';
                var redgauge = document.getElementById('redgauge');
                redgauge.style.display = 'none';
                var gauge2 = document.getElementById('gauge2');
                gauge2.style.display = 'none';
                var redgauge2 = document.getElementById('redgauge2');
                redgauge2.style.display = 'none';
                const hbutton = document.getElementById('hard');
                hbutton.style.display = 'block';
                const nbutton = document.getElementById('normal');
                nbutton.style.display = 'block';
                const ebutton = document.getElementById('easy');
                ebutton.style.display = 'block';
                frestartflag = 1;
                losecount = 0;
                clearInterval(interval);
            }
        }
      }, 100);
}

function efvictory()
{
    document.getElementById('saiya_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const secondbutton = document.getElementById('esecondbutton');
            secondbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function erestart()
{
    if (stagecount == 1) easystart();
    if (stagecount == 2) esecondstart();
    if (stagecount == 3) ethreestart();
    if (stagecount == 4) efourstart();
}

function esecondstart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ebstpunchuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 2;
    
    if (newtwoflag == 0) document.getElementById('ject_audio').currentTime = 0;
    document.getElementById('ject_audio').volume = 0.3;
    document.getElementById('ject_audio').play();
    document.getElementById('ject_audio').loop = true;
    newtwoflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const secondbutton = document.getElementById('esecondbutton');
    secondbutton.style.display = 'none';
    const rebutton = document.getElementById('erestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'd') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 's') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') middlekick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120)
        {
            lowguardrange = 1;
        }
        else
        {
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middleguardrange = 1;
        }
        else
        {
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highguardrange = 1;
        }
        else
        {
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9== 0)
        {
            esecondbodystpunch();
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            esecondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7== 0)
        {
            esecondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            esecondfock();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ebstpunchuse == 0 && ebstpunchuse == 0 &&  emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ebstpunchuse == 0 &&  ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && ebstpunchuse == 0 &&  eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    eflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                esecondvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function esecondpunch()
{
    epunchuse = 1;
    setTimeout(function() {
        var earmcanvas = document.getElementById('earm');
        var earmcontext = earmcanvas.getContext('2d');
        
        
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        
        earmcontext.moveTo(fex-20,fey+20);
        earmcontext.lineTo(fex-75,fey);
        earmcontext.stroke();
        
        if (fex-60 < fpx+50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=2;
            }
            else
            {
                fehitcount++;
            }
            document.getElementById('punch_audio').currentTime = 0;
            document.getElementById('punch_audio').play();
        }

        if (fpx+60 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-20,fey+20);
            earmcontext.lineTo(fex-35,fey+50);
            earmcontext.stroke();
            epunchuse = 0;
          }, 400);
      }, 200);
}

function esecondstpunch()
{
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 1000);
    }, 600);
}

function esecondfock()
{
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 500);
        }, 300);
}

function esecondbodystpunch()
{
    ebstpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-100,fey+30);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=4;
        }
        else
        {
            fehitcount+=2;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        ebstpunchuse = 0;
      }, 1000);
    }, 600);
}

function esecondvictory()
{
    document.getElementById('ject_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById('ject_audio').pause();
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const threebutton = document.getElementById('ethreebutton');
            threebutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function ethreestart()
{
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    gamecount++;
    stagecount = 3;

    if (newthreeflag == 0) document.getElementById('name_audio').currentTime = 0;
    document.getElementById('name_audio').volume = 0.3;
    document.getElementById('name_audio').play();
    document.getElementById('name_audio').loop = true;
    newthreeflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('ethreebutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('erestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'd') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 's') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') middlekick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+120 > fex-120)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            ethreelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            ethreemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            ethreehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    eflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                ethreevictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function ethreelowkick()
{
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 1000);
    }, 400);       
}

function ethreemiddlekick()
{
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 1100);
    }, 500);       
}

function ethreehighkick()
{
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=14;
            }
            else
            {
                fehitcount+=7;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1700);
    }, 1200);       
}

function ethreevictory()
{
    document.getElementById('name_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '勝ち';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const fourbutton = document.getElementById('efourbutton');
            fourbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function efourstart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    stagecount = 4;

    if (newfourflag == 0) document.getElementById('rugal_audio').currentTime = 0;
    document.getElementById('rugal_audio').volume = 0.3;
    document.getElementById('rugal_audio').play();
    document.getElementById('rugal_audio').loop = true;
    newfourflag = 1;

    var gauge = document.getElementById('gauge');
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    var redgcontext2 = redgauge2.getContext('2d');
    const fbutton = document.getElementById('efourbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('erestartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var armcontext2 = armcanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var legcontext2 = legcanvas2.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'ArrowRight') rightwalk();
        if (event.key == 'ArrowLeft')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'd') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 's') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'e') straightpunch();
        if (event.key == 'w') middlekick();
    });

    const interval = setInterval(function()
    {
        if (fex-120 < fpx+120) punchrange = 1;
        else punchrange = 0;
        if (fex-120 < fpx+120) straightrange = 1;
        else straightrange = 0;
        if (fpx+120 > fex-120) fockrange = 1;
        else fockrange = 0;
        if (fpx+120 > fex-120) elbowrange = 1;
        else elbowrange = 0;
        if (fpx+120 > fex-120)
        {
            lowkickrange = 1;
            lowguardrange = 1;
        }
        else
        {
            lowkickrange = 0;
            lowguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            middlekickrange = 1;
            middleguardrange = 1;
        }
        else
        {
            middlekickrange = 0;
            middleguardrange = 0;
        }
        if (fpx+120 > fex-120)
        {
            highkickrange = 1;
            highguardrange = 1;
        }
        else
        {
            highkickrange = 0;
            highguardrange = 0;
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && fjumpuse == 0 && punchuse == 0 && stpunchuse == 0 && fpunchuse == 0 && elbowuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        var random = Math.floor(Math.random() * 10);
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (punchrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%12 == 0)
        {
            esecondpunch();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%11== 0)
        {
            esecondstpunch();
        }
        if (fockrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%10 == 0)
        {
            esecondfock();
        }
        if (straightrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%9 == 0)
        {
            esecondbodystpunch();
        }
        if (lowkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%8 == 0)
        {
            ethreelowkick();
        }
        if (middlekickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%7 == 0)
        {
            ethreemiddlekick();
        }
        if (highkickrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%6 == 0)
        {
            ethreehighkick();
        }
        if (elguardflag == 1 && lowguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%5 == 0)
        {
            enemylowguard();
        }
        if (emguardflag == 1 && middleguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%4 == 0)
        {
            enemymiddleguard();
        }
        if (ehguardflag == 1 && highguardrange == 1 && elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && emguardflag == 0 && ehguardflag == 0 && ewalkuse == 0 && ejumpuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%3 == 0)
        {
            enemyhighguard();
        }
        if (elguarduse == 0 && emguarduse == 0 && ehguarduse == 0 && ewalkuse == 0 && epunchuse == 0  && fstopflag == 0 && epunchuse == 0 && estpunchuse == 0 && ebstpunchuse == 0 && efpunchuse == 0 && eelbowuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0 && random%2 == 0)
        {
            enemywalk();
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    eflose();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                efourvictory();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function efourvictory()
{
    document.getElementById('rugal_audio').pause();
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = 'クリア';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const endbutton = document.getElementById('endbutton');
            endbutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function buttlestart()
{
    gamecount++;
    frestartflag = 0;
    fpy = 210;
    fpx = 35;
    fey = 210;
    fex = 470;
    blood = 0;
    eblood = 0;
    punchuse = 0;
    stpunchuse = 0;
    fpunchuse = 0;
    elbowuse = 0;
    walkuse = 0;
    fjumpuse = 0;
    lowkickuse = 0;
    middlekickuse = 0;
    highkickuse = 0;
    epunchuse = 0;
    estpunchuse = 0;
    efpunchuse = 0;
    eelbowuse = 0;
    elowkickuse = 0;
    emiddlekickuse = 0;
    ehighkickuse = 0;
    ewalkuse = 0;
    ejumpuse = 0;
    fhitflag = 0;
    fehitflag = 0;
    fhitcount = 0;
    fehitcount = 0;
    lowhit = 0;
    elowhit = 0;
    guardflag = 0;
    hguarduse = 0;
    mguarduse = 0;
    lguarduse = 0;
    hguardflag = 0;
    mguardflag = 0;
    lguardflag = 0;
    ehguarduse = 0;
    emguarduse = 0;
    elguarduse = 0;
    ehguardflag = 0;
    emguardflag = 0;
    elguardflag = 0;
    elbowrange = 0;
    fockrange = 0;
    punchrange = 0;
    highkickrange = 0;
    lowkickrange = 0;
    straightrange = 0;
    middlekickrange = 0;
    lowguardrange = 0;
    middleguardrange = 0;
    highguardrange = 0;
    fstopflag = 0;
    
    if (newoneflag == 0) document.getElementById('saiya_audio').currentTime = 0;
    document.getElementById('saiya_audio').volume = 0.5;
    document.getElementById('saiya_audio').play();
    document.getElementById('saiya_audio').loop = true;
    newoneflag = 1;

    const rbutton = document.getElementById('buttlerestartbutton');
    rbutton.style.display = 'none';
    const bu = document.getElementById('battle');
    bu.style.display = 'none';
    var gauge = document.getElementById('gauge');
    gauge.style.display = 'block';
    var gcontext = gauge.getContext('2d');
    var redgauge = document.getElementById('redgauge');
    redgauge.style.display = 'block';
    var redgcontext = redgauge.getContext('2d');
    var gauge2 = document.getElementById('gauge2');
    gauge2.style.display = 'block';
    var gcontext2 = gauge2.getContext('2d');
    var redgauge2 = document.getElementById('redgauge2');
    redgauge2.style.display = 'block';
    var redgcontext2 = redgauge2.getContext('2d');
    const hard = document.getElementById('hard');
    hard.style.display = 'none';
    const normal = document.getElementById('normal');
    normal.style.display = 'none';
    const easy = document.getElementById('easy');
    easy.style.display = 'none';
    const fbutton = document.getElementById('fstartbutton');
    fbutton.style.display = 'none';
    const rebutton = document.getElementById('restartbutton');
    rebutton.style.display = 'none';

    document.getElementById("result").innerText = '';
    document.getElementById("manual").innerHTML = 'キー設定<br>1P<br>Q-->左に移動と上段ガード&emsp;E-->右に移動<br>D-->ストレート&emsp;S-->フック<br>C-->ローキック&emsp;X-->ミドルキック&emsp;W-->ハイキック<br>A-->中段ガード&emsp;Z-->下段ガード<br><br>2P<br>I-->左に移動&emsp;P-->右に移動と上段ガード<br>J-->ストレート&emsp;K-->フック<br>B-->ローキック&emsp;N-->ミドルキック&emsp;O-->ハイキック<br>L-->中段ガード&emsp;M-->下段ガード';
    gcontext.beginPath();
    gcontext.lineWidth = 20;
    gcontext.moveTo(20,20);
    gcontext.lineTo(230,20);
    gcontext.strokeStyle = '#00ff00';
    gcontext.stroke();
    redgcontext.beginPath();
    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
    gcontext2.beginPath();
    gcontext2.lineWidth = 20;
    gcontext2.moveTo(270,20);
    gcontext2.lineTo(480,20);
    gcontext2.strokeStyle = '#00ff00';
    gcontext2.stroke();
    redgcontext2.beginPath();
    redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
    
    var armcanvas = document.getElementById('armplayer');
    armcanvas.style.display = 'block';
    var armcontext = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    armcanvas2.style.display = 'block';
    var armcontext2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    armcanvas3.style.display = 'block';
    var armcontext3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    armcanvas4.style.display = 'block';
    var bodycanvas2 = document.getElementById('bodyplayer2');
    bodycanvas2.style.display = 'block';
    var bodycontext2 = bodycanvas2.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    bodycanvas.style.display = 'block';
    var bodycontext = bodycanvas.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    legcanvas.style.display = 'block';
    var legcontext = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    legcanvas2.style.display = 'block';
    var legcontext2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    legcanvas3.style.display = 'block';
    var facecanvas = document.getElementById('faceplayer');
    facecanvas.style.display = 'block';
    var facecontext = facecanvas.getContext('2d');
    var earmcanvas = document.getElementById('earm');
    earmcanvas.style.display = 'block';
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    earmcanvas2.style.display = 'block';
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    earmcanvas3.style.display = 'block';
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    earmcanvas4.style.display = 'block';
    var ebodycanvas = document.getElementById('ebody');
    ebodycanvas.style.display = 'block';
    var ebodycanvas2 = document.getElementById('ebody2');
    ebodycanvas2.style.display = 'block';
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    elegcanvas.style.display = 'block';
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    elegcanvas2.style.display = 'block';
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    elegcanvas3.style.display = 'block';
    var efacecanvas = document.getElementById('eface');
    efacecanvas.style.display = 'block';
    var efacecontext = efacecanvas.getContext('2d');

    armcontext.beginPath();
    armcontext.clearRect(0,0,armcanvas.width,armcanvas.height);
    armcontext.moveTo(fpx+20,fpy+20);
    armcontext.lineTo(fpx+5,fpy+50);
    armcontext.stroke();
    armcontext2.beginPath();
    armcontext2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
    armcontext2.moveTo(fpx+20,fpy+20);
    armcontext2.lineTo(fpx+35,fpy+50);
    armcontext2.stroke();
    armcontext3.beginPath();
    armcontext3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
    bodycontext.beginPath();
    bodycontext.clearRect(0,0,bodycanvas.width,bodycanvas.height);
    bodycontext.moveTo(fpx+20,fpy);
    bodycontext.lineTo(fpx+20,fpy+60);
    bodycontext.stroke();
    bodycontext2.beginPath();
    bodycontext2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
    legcontext.beginPath();
    legcontext.clearRect(0,0,legcanvas.width,legcanvas.height);
    legcontext.moveTo(fpx+20,fpy+60);
    legcontext.lineTo(fpx+35,fpy+80);
    legcontext.stroke();
    legcontext2.beginPath();
    legcontext2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
    legcontext2.moveTo(fpx+20,fpy+60);
    legcontext2.lineTo(fpx+5,fpy+80);
    legcontext2.stroke();
    facecontext.beginPath();
    facecontext.clearRect(0,0,facecanvas.width,facecanvas.height);
    facecontext.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
    facecontext.stroke();
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    document.addEventListener('keydown',
    event => {
        if (event.key == 'e') rightwalk();
        if (event.key == 'q')
        {
            hguardflag = 1;
            leftwalk();
        }
        else hguardflag = 0;
        if (event.key == 'a') mguardflag = 1;
        else mguardflag = 0;
        if (event.key == 'z') lguardflag = 1;
        else lguardflag = 0;
        if (event.key == 'd') straightpunch();
        if (event.key == 's') fock();
        if (event.key == 'c') lowkick();
        if (event.key == 'x') middlekick();
        if (event.key == 'w') highkick();
        if (event.key == 'i') eleftwalk();
        if (event.key == 'p')
        {
            ehguardflag = 1;
            erightwalk();
        }
        else ehguardflag = 0;
        if (event.key == 'l') emguardflag = 1;
        else emguardflag = 0;
        if (event.key == 'm') elguardflag = 1;
        else elguardflag = 0;
        if (event.key == 'j') estraightpunch();
        if (event.key == 'k') efock();
        if (event.key == 'b') elowkick();
        if (event.key == 'n') emiddlekick();
        if (event.key == 'o') ehighkick();
    });

    const interval = setInterval(function()
    {
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
        if (hguardflag == 1 && mguardflag == 0 && lguardflag == 0 && stpunchuse == 0 && fpunchuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            highguard();
        }
        if (mguardflag == 1 && lguardflag == 0 && hguardflag == 0 && stpunchuse == 0 && fpunchuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            middleguard();
        }
        if (lguardflag == 1 && mguardflag == 0 && hguardflag == 0 && stpunchuse == 0 && fpunchuse == 0 && lowkickuse == 0 && middlekickuse == 0 && highkickuse == 0)
        {
            lowguard();
        }
        if (ehguardflag == 1 && emguardflag == 0 && elguardflag == 0 && ehguarduse == 0 && estpunchuse == 0 && efpunchuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0)
        {
            enemyhighguard();
        }
        if (emguardflag == 1 && ehguardflag == 0 && elguardflag == 0 && emguarduse == 0 && estpunchuse == 0 && efpunchuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0)
        {
            enemymiddleguard();
        }
        if (elguardflag == 1 && emguardflag == 0 && ehguardflag == 0 && elguarduse == 0 && estpunchuse == 0 && efpunchuse == 0 && elowkickuse == 0 && emiddlekickuse == 0 && ehighkickuse == 0)
        {
            enemylowguard();
        }
        if (blood == 1 && random % 7 == 0)
        {
            fehitflag = 1;
            fehitcount++;
        }
        if (eblood == 1 && random % 9 == 0)
        {
            fhitflag = 1;
            fhitcount++;
        }
        if (fehitflag == 1)
        {
            var c = fehitcount * 3;
            if (c >= 210)
                {
                    gcontext.beginPath();
                    gcontext.clearRect(0,0,gauge.width,gauge.height);
                    gcontext.lineWidth = 20;
                    gcontext.moveTo(20,20);
                    gcontext.lineTo(230-210,20);
                    gcontext.strokeStyle = '#00ff00';
                    gcontext.stroke();
                    redgcontext.beginPath();
                    redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                    redgcontext.lineWidth = 20;
                    redgcontext.moveTo(230,20);
                    redgcontext.lineTo(230-210,20);
                    redgcontext.strokeStyle = '#ff0000';
                    redgcontext.stroke();
                    fehitflag = 0;
                    ewin();
                }
            else
            {
                gcontext.beginPath();
                gcontext.clearRect(0,0,gauge.width,gauge.height);
                gcontext.lineWidth = 20;
                gcontext.moveTo(20,20);
                gcontext.lineTo(230-c,20);
                gcontext.strokeStyle = '#00ff00';
                gcontext.stroke();
                redgcontext.beginPath();
                redgcontext.clearRect(0,0,redgauge.width,redgauge.height);
                redgcontext.lineWidth = 20;
                redgcontext.moveTo(230,20);
                redgcontext.lineTo(230-c,20);
                redgcontext.strokeStyle = '#ff0000';
                redgcontext.stroke();
                fehitflag = 0;
            }
        }
        if (fhitflag == 1)
        {
            var ec = fhitcount * 3;
            if (ec >= 210)
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-210,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-210,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
                win();
            }
            else
            {
                gcontext2.beginPath();
                gcontext2.clearRect(0,0,gauge2.width,gauge2.height);
                gcontext2.lineWidth = 20;
                gcontext2.moveTo(270,20);
                gcontext2.lineTo(480-ec,20);
                gcontext2.strokeStyle = '#00ff00';
                gcontext2.stroke();
                redgcontext2.beginPath();
                redgcontext2.clearRect(0,0,redgauge2.width,redgauge2.height);
                redgcontext2.lineWidth = 20;
                redgcontext2.moveTo(480,20);
                redgcontext2.lineTo(480-ec,20);
                redgcontext2.strokeStyle = '#ff0000';
                redgcontext2.stroke();
                fhitflag = 0;
            }
        }
        if (fstopflag == 1)
        {
            clearInterval(interval);
        }
    },100);
}

function estraightpunch()
{
    if (fstopflag == 1 || estpunchuse == 1 || efpunchuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1 || ewalkuse == 1)
    {
        return;
    }
    estpunchuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earm = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earm2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebody = ebodycanvas.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var eface = efacecanvas.getContext('2d');

    earm.beginPath();
    earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earm.moveTo(fex-20,fey+20);
    earm.lineTo(fex-90,fey);
    earm.stroke();
    earm2.beginPath();
    earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earm2.moveTo(fex-20,fey+20);
    earm2.lineTo(fex,fey+30);
    earm2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm3.moveTo(fex-25,fey+25);
    earm3.lineTo(fex,fey+30);
    earm3.stroke();
    ebody.beginPath();
    ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebody.moveTo(fex-25,fey);
    ebody.lineTo(fex-20,fey+60);
    ebody.stroke();
    eface.beginPath();
    eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    eface.arc(fex-25,fey-20,20,0,Math.PI*2,true);
    eface.stroke();

    if (fex-60 < fpx+60 && fey < fpy+80 && hguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=6;
        }
        else
        {
            fehitcount+=3;
        }
        document.getElementById('straight_audio').currentTime = 0;
        document.getElementById('straight_audio').play();
    }
    if (fpx+60 > fex-60 && fey < fpy+80 && hguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+20);
        earm.lineTo(fex-35,fey+50);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-5,fey+50);
        earm2.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-20,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        estpunchuse = 0;
      }, 800);
    }, 300);
}

function efock()
{
    if (fstopflag == 1 || estpunchuse == 1 || efpunchuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1 || ewalkuse == 1)
    {
        return;
    }
    efpunchuse = 1;
    setTimeout(function() {

        var earmcanvas = document.getElementById('earm'); 
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        var earmcanvas4 = document.getElementById('earm4');
        var earm4 = earmcanvas4.getContext('2d');
        var ebodycanvas = document.getElementById('ebody');
        var ebody = ebodycanvas.getContext('2d');
        var efacecanvas = document.getElementById('eface');
        var eface = efacecanvas.getContext('2d');
        
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-25,fey+20);
        earm.lineTo(fex-55,fey-5);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-25,fey+20);
        earm2.lineTo(fex-5,fey+30);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-5,fey+30);
        earm3.lineTo(fex-30,fey+25);
        earm3.stroke();
        earm4.beginPath();
        earm4.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm4.moveTo(fex-55,fey-5);
        earm4.lineTo(fex-75,fey);
        earm4.stroke();
        ebody.beginPath();
        ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebody.moveTo(fex-25,fey);
        ebody.lineTo(fex-20,fey+60);
        ebody.stroke();
        eface.beginPath();
        eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        eface.arc(fex-30,fey-20,20,0,Math.PI*2,true);
        eface.stroke();
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=6;
            }
            else
            {
                fehitcount+=3;
            }
            document.getElementById('fock_audio').currentTime = 0;
            document.getElementById('fock_audio').play();
        }
        if (fpx+50 > fex-50 && fey < fpy+80 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            leftwalk();
        }
        if (fstopflag == 1) return;
        setTimeout(function() {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ebody.beginPath();
            ebody.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebody.moveTo(fex-20,fey);
            ebody.lineTo(fex-20,fey+60);
            ebody.stroke();
            eface.beginPath();
            eface.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            eface.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            eface.stroke();
            efpunchuse = 0;
            }, 300);
        }, 100);
}

function elowkick()
{
    if (fstopflag == 1 || estpunchuse == 1 || efpunchuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1 || ewalkuse == 1)
    {
        return;
    }
    elowkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-2,fey+5);
        earmcontext.lineTo(fex+4,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+4,fey+30);
        earmcontext2.lineTo(fex-19,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-2,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-90,fey+63);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-5,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-30 && fey+63 < fpy + 80 && lguarduse == 0)
    {
        fehitflag = 1;
        elowhit++;
        document.getElementById('lowkick_audio').currentTime = 0;
        document.getElementById('lowkick_audio').play();
        if (elowhit < 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=4;
        }
        else if (elowhit >= 6 && (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1))
        {
            fehitcount+=12;
        }
        else if (elowhit < 6)
        {
            fehitcount+=2;
        }
        else if (elowhit >= 6)
        {
            fehitcount+=6;
        }
    }
    if (fpx+80 > fex-30 && fey+63 < fpy+80 && lguarduse == 1)
    {
        fhitflag = 1;
        fhitcount+=2;
        lowhit++;
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        elowkickuse = 0;
        }, 600);
    }, 300);       
}

function emiddlekick()
{
    if (fstopflag == 1 || estpunchuse == 1 || efpunchuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1 || ewalkuse == 1)
    {
        return;
    }
    emiddlekickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex,fey+5);
        earmcontext.lineTo(fex+6,fey+30);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+6,fey+30);
        earmcontext2.lineTo(fex-14,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex,fey+10);
        earmcontext3.lineTo(fex-40,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+65);
        elegcontext.lineTo(fex-120,fey+35);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex+5,fey-10);
        ebodycontext.lineTo(fex-10,fey+60);
        ebodycontext.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 0)
    {
        fehitflag = 1;
        if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
        {
            fehitcount+=8;
        }
        else
        {
            fehitcount+=4;
        }
        document.getElementById('middlekick_audio').currentTime = 0;
        document.getElementById('middlekick_audio').play();
    }
    if (fpx+80 > fex-60 && fey+30 < fpy+80 && mguarduse == 1)
    {
        document.getElementById('guard_audio').currentTime = 0;
        document.getElementById('guard_audio').play();
        rightwalk();
        rightwalk();
    }
    if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        emiddlekickuse = 0;
        }, 800);
    }, 400);       
}

function ehighkick()
{
    if (fstopflag == 1 || estpunchuse == 1 || efpunchuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1 || ewalkuse == 1)
    {
        return;
    }
    ehighkickuse = 1;
    setTimeout(function() {
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earmcontext3 = earmcanvas3.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebodycontext2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    
        earmcontext.beginPath();
        earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earmcontext.moveTo(fex-3,fey+5);
        earmcontext.lineTo(fex+13,fey+35);
        earmcontext.stroke();
        earmcontext2.beginPath();
        earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext2.moveTo(fex+13,fey+35);
        earmcontext2.lineTo(fex-30,fey-20);
        earmcontext2.stroke();
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earmcontext3.moveTo(fex-3,fey+10);
        earmcontext3.lineTo(fex-30,fey+15);
        earmcontext3.stroke();
        elegcontext.beginPath();
        elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        elegcontext.moveTo(fex-10,fey+60);
        elegcontext.lineTo(fex-60,fey-10);
        elegcontext.stroke();
        elegcontext2.beginPath();
        elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        elegcontext2.moveTo(fex-10,fey+60);
        elegcontext2.lineTo(fex-5,fey+80);
        elegcontext2.stroke();
        ebodycontext.beginPath();
        ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
        ebodycontext.moveTo(fex-5,fey-10);
        ebodycontext.lineTo(fex,fey+25);
        ebodycontext.stroke();
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
        ebodycontext2.moveTo(fex,fey+25);
        ebodycontext2.lineTo(fex-10,fey+60);
        ebodycontext2.stroke();
        efacecontext.beginPath();
        efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
        efacecontext.arc(fex-10,fey-30,20,0,Math.PI*2,true);
        efacecontext.stroke();
    
        if (fpx+80 > fex-20 && hguarduse == 0)
        {
            fehitflag = 1;
            if (punchuse == 1 || stpunchuse == 1 || fpunchuse == 1 || elbowuse == 1 || lowkickuse == 1 || middlekickuse == 1 || highkickuse == 1)
            {
                fehitcount+=20;
            }
            else
            {
                fehitcount+=10;
            }
            document.getElementById('highkick_audio').currentTime = 0;
            document.getElementById('highkick_audio').play();
        }
        if (fpx+80 > fex-20 && hguarduse == 1)
        {
            document.getElementById('guard_audio').currentTime = 0;
            document.getElementById('guard_audio').play();
            rightwalk();
        }
        if (fpx+80 > fex-20 && fpy < 200)
        {
            fehitflag = 1;
            fehitcount = 42;
            document.getElementById('teen_audio').currentTime = 0;
            document.getElementById('teen_audio').play();
        }
        if (fstopflag == 1) return;
    setTimeout(function() {
        earmcontext3.beginPath();
        earmcontext3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        ebodycontext2.beginPath();
        ebodycontext2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
        ehighkickuse = 0;
        }, 1500);
    }, 1000);       
}

function eleftwalk()
{
    if (fstopflag == 1 || epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 || eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
    {
        return;
    }
    if (ewalkuse == 1)
    {
        return;
    }
    if (fpx > fex-90)
    {
        return;
    }
    ewalkuse = 1;
    if (gamecount == 1) fex-=10;
    if (gamecount == 2) fex-=5;
    if (gamecount == 3) fex-=3;
    if (gamecount == 4) fex-=3;
    if (gamecount == 5) fex-=3;
    if (gamecount == 6) fex-=2;
    if (gamecount == 7) fex-=2;
    if (gamecount == 8) fex-=2;
    if (gamecount >= 9) fex-=1;
    if (fstopflag == 1) return;
    
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm4.beginPath();
    earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    ebody2.beginPath();
    ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    ewalkuse = 0;
}

function erightwalk()
{
    if (fstopflag == 1 || epunchuse == 1 || estpunchuse == 1 || efpunchuse == 1 || eelbowuse == 1 || elowkickuse == 1 || emiddlekickuse == 1 || ehighkickuse == 1)
    {
        return;
    }
    if (ewalkuse == 1)
    {
        return;
    }
    if (fex > 470)
    {
        return;
    }
    ewalkuse = 1;
    if (gamecount == 1) fex+=10;
    if (gamecount == 2) fex+=5;
    if (gamecount == 3) fex+=3;
    if (gamecount == 4) fex+=3;
    if (gamecount == 5) fex+=3;
    if (gamecount == 6) fex+=2;
    if (gamecount == 7) fex+=2;
    if (gamecount == 8) fex+=2;
    if (gamecount >= 9) fex+=1;
    if (fstopflag == 1) return;
    
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');

    earmcontext.beginPath();
    earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
    earmcontext.moveTo(fex-20,fey+20);
    earmcontext.lineTo(fex-35,fey+50);
    earmcontext.stroke();
    earmcontext2.beginPath();
    earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
    earmcontext2.moveTo(fex-20,fey+20);
    earmcontext2.lineTo(fex-5,fey+50);
    earmcontext2.stroke();
    earm3.beginPath();
    earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
    earm4.beginPath();
    earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
    ebodycontext.beginPath();
    ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
    ebodycontext.moveTo(fex-20,fey);
    ebodycontext.lineTo(fex-20,fey+60);
    ebodycontext.stroke();
    ebody2.beginPath();
    ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
    elegcontext.beginPath();
    elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
    elegcontext.moveTo(fex-20,fey+60);
    elegcontext.lineTo(fex-5,fey+80);
    elegcontext.stroke();
    elegcontext2.beginPath();
    elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
    elegcontext2.moveTo(fex-20,fey+60);
    elegcontext2.lineTo(fex-35,fey+80);
    elegcontext2.stroke();
    efacecontext.beginPath();
    efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
    efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
    efacecontext.stroke();
    ewalkuse = 0;
}

function ewin()
{
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var armcanvas = document.getElementById('armplayer');
    var arm = armcanvas.getContext('2d');
    var armcanvas2 = document.getElementById('armplayer2');
    var arm2 = armcanvas2.getContext('2d');
    var armcanvas3 = document.getElementById('armplayer3');
    var arm3 = armcanvas3.getContext('2d');
    var armcanvas4 = document.getElementById('armplayer4');
    var arm4 = armcanvas4.getContext('2d');
    var bodycanvas = document.getElementById('bodyplayer');
    var body = bodycanvas.getContext('2d');
    var bodycanvas2 = document.getElementById('bodyplayer2');
    var body2 = bodycanvas2.getContext('2d');
    var legcanvas = document.getElementById('legplayer');
    var leg = legcanvas.getContext('2d');
    var legcanvas2 = document.getElementById('legplayer2');
    var leg2 = legcanvas2.getContext('2d');
    var legcanvas3 = document.getElementById('legplayer3');
    var leg3 = legcanvas3.getContext('2d');
    var facecanvas = document.getElementById('faceplayer');
    var face = facecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fpx > 20) fpx-=5;
        if (flag == 0)
        {
            fpy-=5;
        }
        if (fpy === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fpy+=5;
        }
        if (flag == 0)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy+5);
            arm.lineTo(fpx+70,fpy+45);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy+5);
            arm2.lineTo(fpx+100,fpy+20);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-10);
            body.lineTo(fpx+100,fpy+40);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+100,fpy+40);
            leg.lineTo(fpx+95,fpy+60);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+100,fpy+40);
            leg2.lineTo(fpx+130,fpy+45);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (flag == 1)
        {
            arm3.beginPath();
            arm3.clearRect(0,0,armcanvas3.width,armcanvas3.height);
            arm4.beginPath();
            arm4.clearRect(0,0,armcanvas4.width,armcanvas4.height);
            body2.beginPath();
            body2.clearRect(0,0,bodycanvas2.width,bodycanvas2.height);
            leg3.beginPath();
            leg3.clearRect(0,0,legcanvas3.width,legcanvas3.height);
            arm.beginPath();
            arm.clearRect(0,0,armcanvas.width,armcanvas.height);
            arm.moveTo(fpx+60,fpy-20);
            arm.lineTo(fpx+75,fpy-35);
            arm.stroke();
            arm2.beginPath();
            arm2.clearRect(0,0,armcanvas2.width,armcanvas2.height);
            arm2.moveTo(fpx+60,fpy-20);
            arm2.lineTo(fpx+75,fpy-5);
            arm2.stroke();
            body.beginPath();
            body.clearRect(0,0,bodycanvas.width,bodycanvas.height);
            body.moveTo(fpx+40,fpy-20);
            body.lineTo(fpx+120,fpy-20);
            body.stroke();
            leg.beginPath();
            leg.clearRect(0,0,legcanvas.width,legcanvas.height);
            leg.moveTo(fpx+120,fpy-20);
            leg.lineTo(fpx+135,fpy-5);
            leg.stroke();
            leg2.beginPath();
            leg2.clearRect(0,0,legcanvas2.width,legcanvas2.height);
            leg2.moveTo(fpx+120,fpy-20);
            leg2.lineTo(fpx+135,fpy-35);
            leg2.stroke();
            face.beginPath();
            face.clearRect(0,0,facecanvas.width,facecanvas.height);
            face.arc(fpx+20,fpy-20,20,0,Math.PI*2,true);
            face.stroke();
        }
        if (fpy > 275)
        {
            document.getElementById('youlose_audio').currentTime = 0;
            document.getElementById('youlose_audio').play();
            document.getElementById("result").innerText = '2Pの勝利';
            frestartflag = 1;
            const rebutton = document.getElementById('buttlerestartbutton');
            rebutton.style.display = 'block';
            clearInterval(interval);
        }
      }, 100);
}

function win()
{
    fstopflag = 1;
    document.getElementById('uwa_audio').currentTime = 0;
    document.getElementById('uwa_audio').play();
    var flag = 0;
    var earmcanvas = document.getElementById('earm');
    var earmcontext = earmcanvas.getContext('2d');
    var earmcanvas2 = document.getElementById('earm2');
    var earmcontext2 = earmcanvas2.getContext('2d');
    var earmcanvas3 = document.getElementById('earm3');
    var earm3 = earmcanvas3.getContext('2d');
    var earmcanvas4 = document.getElementById('earm4');
    var earm4 = earmcanvas4.getContext('2d');
    var ebodycanvas2 = document.getElementById('ebody2');
    var ebody2 = ebodycanvas2.getContext('2d');
    var ebodycanvas = document.getElementById('ebody');
    var ebodycontext = ebodycanvas.getContext('2d');
    var elegcanvas = document.getElementById('eleg');
    var elegcontext = elegcanvas.getContext('2d');
    var elegcanvas2 = document.getElementById('eleg2');
    var elegcontext2 = elegcanvas2.getContext('2d');
    var elegcanvas3 = document.getElementById('eleg3');
    var elegcontext3 = elegcanvas3.getContext('2d');
    var efacecanvas = document.getElementById('eface');
    var efacecontext = efacecanvas.getContext('2d');
    const interval = setInterval(function() {
        if (fex < 480) fex+=5;
        if (flag == 0)
        {
            fey-=5;
        }
        if (fey === 80)
        {
            flag = 1;
        }
        if (flag == 1)
        {
            fey+=5;
        }
        if (flag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-50,fey+10);
            earmcontext.lineTo(fex-80,fey+15);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-50,fey+10);
            earmcontext2.lineTo(fex-55,fey+40);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-35,fey-5);
            ebodycontext.lineTo(fex-85,fey+45);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-85,fey+45);
            elegcontext.lineTo(fex-115,fey+50);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-85,fey+45);
            elegcontext2.lineTo(fex-90,fey+75);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (flag == 1)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm4.beginPath();
            earm4.clearRect(0,0,earmcanvas4.width,earmcanvas4.height);
            elegcontext3.beginPath();
            elegcontext3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            earmcontext.beginPath();
            earmcontext.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earmcontext.moveTo(fex-60,fey-25);
            earmcontext.lineTo(fex-75,fey-40);
            earmcontext.stroke();
            earmcontext2.beginPath();
            earmcontext2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earmcontext2.moveTo(fex-60,fey-25);
            earmcontext2.lineTo(fex-75,fey-10);
            earmcontext2.stroke();
            ebodycontext.beginPath();
            ebodycontext.clearRect(0,0,ebodycanvas.width,ebodycanvas.height);
            ebodycontext.moveTo(fex-40,fey-25);
            ebodycontext.lineTo(fex-100,fey-25);
            ebodycontext.stroke();
            ebody2.beginPath();
            ebody2.clearRect(0,0,ebodycanvas2.width,ebodycanvas2.height);
            elegcontext.beginPath();
            elegcontext.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            elegcontext.moveTo(fex-100,fey-25);
            elegcontext.lineTo(fex-115,fey-10);
            elegcontext.stroke();
            elegcontext2.beginPath();
            elegcontext2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            elegcontext2.moveTo(fex-100,fey-25);
            elegcontext2.lineTo(fex-115,fey-40);
            elegcontext2.stroke();
            efacecontext.beginPath();
            efacecontext.clearRect(0,0,efacecanvas.width,efacecanvas.height);
            efacecontext.arc(fex-20,fey-20,20,0,Math.PI*2,true);
            efacecontext.stroke();
        }
        if (fey > 275)
        {
            document.getElementById("result").innerText = '1Pの勝利';
            document.getElementById('youwin_audio').currentTime = 0;
            document.getElementById('youwin_audio').play();
            const rebutton = document.getElementById('buttlerestartbutton');
            rebutton.style.display = 'block';
            frestartflag = 1;
            clearInterval(interval);
        }
      }, 100);
}

function elowguard()
{
    elguarduse = 1;
        var elegcanvas = document.getElementById('eleg');
        var eleg = elegcanvas.getContext('2d');
        var elegcanvas2 = document.getElementById('eleg2');
        var eleg2 = elegcanvas2.getContext('2d');
        var elegcanvas3 = document.getElementById('eleg3');
        var eleg3 = elegcanvas3.getContext('2d');
        eleg.beginPath();
        eleg.clearRect(0,0,elegcanvas.width,elegcanvas.height);
        eleg.moveTo(fex-20,fey+60);
        eleg.lineTo(fex-5,fey+80);
        eleg.stroke();
        eleg2.beginPath();
        eleg2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
        eleg2.moveTo(fex-20,fey+60);
        eleg2.lineTo(fex-35,fey+70);
        eleg2.stroke();
        eleg3.beginPath();
        eleg3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
        eleg3.moveTo(fex-35,fey+70);
        eleg3.lineTo(fex-20,fey+80);
        eleg3.stroke();
        const interval = setInterval(function() {
            if (fstopflag == 1) return;
        if (elguardflag == 0)
        {
            eleg3.beginPath();
            eleg3.clearRect(0,0,elegcanvas3.width,elegcanvas3.height);
            eleg.beginPath();
            eleg.clearRect(0,0,elegcanvas.width,elegcanvas.height);
            eleg.moveTo(fex-20,fey+60);
            eleg.lineTo(fex-5,fey+80);
            eleg.stroke();
            eleg2.beginPath();
            eleg2.clearRect(0,0,elegcanvas2.width,elegcanvas2.height);
            eleg2.moveTo(fex-20,fey+60);
            eleg2.lineTo(fex-35,fey+80);
            eleg2.stroke();
            elguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function emiddleguard()
{
    emguarduse = 1;
    var earmcanvas = document.getElementById('earm');
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        var earmcanvas3 = document.getElementById('earm3');
        var earm3 = earmcanvas3.getContext('2d');
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey);
        earm.lineTo(fex-15,fey+40);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-15,fey+40);
        earm2.lineTo(fex-35,fey);
        earm2.stroke();
        earm3.beginPath();
        earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
        earm3.moveTo(fex-20,fey+10);
        earm3.lineTo(fex-30,fey+50);
        earm3.stroke();
        const interval = setInterval(function() {
            if (fstopflag == 1) return;
        if (emguardflag == 0)
        {
            earm3.beginPath();
            earm3.clearRect(0,0,earmcanvas3.width,earmcanvas3.height);
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            emguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}

function ehighguard()
{
    ehguarduse = 1;
    var earmcanvas = document.getElementById('earm');
        var earm = earmcanvas.getContext('2d');
        var earmcanvas2 = document.getElementById('earm2');
        var earm2 = earmcanvas2.getContext('2d');
        earm.beginPath();
        earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
        earm.moveTo(fex-20,fey+10);
        earm.lineTo(fex-50,fey-10);
        earm.stroke();
        earm2.beginPath();
        earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
        earm2.moveTo(fex-20,fey+20);
        earm2.lineTo(fex-50,fey-20);
        earm2.stroke();
        const interval = setInterval(function() {
            if (fstopflag == 1) return;
        if (ehguardflag == 0)
        {
            earm.beginPath();
            earm.clearRect(0,0,earmcanvas.width,earmcanvas.height);
            earm.moveTo(fex-20,fey+20);
            earm.lineTo(fex-35,fey+50);
            earm.stroke();
            earm2.beginPath();
            earm2.clearRect(0,0,earmcanvas2.width,earmcanvas2.height);
            earm2.moveTo(fex-20,fey+20);
            earm2.lineTo(fex-5,fey+50);
            earm2.stroke();
            ehguarduse = 0;
            clearInterval(interval);
        }
      }, 10);
}
