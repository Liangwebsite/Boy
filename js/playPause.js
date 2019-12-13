
      //	控制暂停/播放
	var video=document.getElementById("videos");
	function playPause(){
		if (video.paused)
            video.play();
        else
            video.pause();
	}
