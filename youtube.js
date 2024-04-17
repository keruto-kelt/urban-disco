var youtubecount = 0;
var movielist = ['https://www.youtube.com/embed/43K7MrlvD0A','https://www.youtube.com/embed/wJR7taJrdhg','https://www.youtube.com/embed/ZL7sW9r-5wk','https://www.youtube.com/embed/_kfnnEE_D0g','https://www.youtube.com/embed/spU60snE3Ko','https://www.youtube.com/embed/eKVuj3yn2bc','https://www.youtube.com/embed/6RIRRarn-3o','https://www.youtube.com/embed/kGQAejpXUpw','https://www.youtube.com/embed/UUpfvVO-BYw','https://www.youtube.com/embed/iODHHvTnY58','https://www.youtube.com/embed/GJV-NzStajc','https://www.youtube.com/embed/nCWmYR7L9d0','https://www.youtube.com/embed/rNK_VZPL8Bw','https://www.youtube.com/embed/oHdXpGsBtq4','https://www.youtube.com/embed/ACXQo835Qls'];
var random = Array(movielist.length);
for(var i=0;i<random.length;i++)
        {
            random[i] = i;
        }
var r = random.length-1;
while(r)
{
    var j = Math.floor(Math.random() * r);
    var t = random[--r];
    random[r] = random[j];
    random[j] = t;
}

function changeyoutube()
{
    if (youtubecount == movielist.length)
    {
        youtubecount = 0;
        for(var i=0;i<movielist.length;i++)
        {
            random[i] = i;
        }
        r = random.length-1;
        while(r)
        {
            var j = Math.floor(Math.random() * r);
            var t = random[--r];
            random[r] = random[j];
            random[j] = t;
        }
    }
    var youtubevideo = document.getElementById('youtube');
    youtubevideo.src = movielist[random[youtubecount]];
    youtubecount++;
    youtubevideo.load();
    youtubevideo.play();
}
