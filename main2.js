var player;
var currentPlay = 0;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("palyer",
    {                      
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":5 //有幾首歌
                    },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
                }
    }
                          
                          );
}

function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    if(event.data==0)
    {
        if(currentPlay<playList.length-1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        else
        {
            currentPlay=0;
            player.cueVideoById({
                "vidoeId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });    
        }
    }
    if(player.getVideoLoadedFraction()>0)
        {$("h2").text(player.getVideoData().title);}
}