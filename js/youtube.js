    videos=[
    '6DvP11cr4rE'
    
    ]
    class YouTubePlayer {
        constructor() {
        this.player = null;
        this.initPlayer();
        this.bindEvents();
        }

        initPlayer() {
        this.player = new YT.Player("player", {
            width: 1920,  // Set the width to 1920 pixels
            height: 1080, // Set the height to 1080 pixels
    
            playerVars: {
            controls: 0, // Hide YouTube controls
            },
            events: {
            onReady: this.onPlayerReady,
            },
        });
        }

        onPlayerReady(event) {
        event.target.playVideo();
        }

        bindEvents() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {    
            this.player.loadVideoById(videos[Math.floor(Math.random()*videos.length)]);
            this.player.playVideo();
            }
        });
        }
    }

    // Load the YouTube API asynchronously
    function onYouTubeIframeAPIReady() {
        new YouTubePlayer();
    }
