class VideoPlayerState {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
    }
}

class PlayingState extends VideoPlayerState {
    play() {
        console.log("It's playing");
    }

    stop() {
        console.log("It's stopped");
        this.videoPlayer.changeState(this.videoPlayer.states.stopped);
    }
}

class StoppedState extends VideoPlayerState {
    play() {
        console.log("It's playing");
        this.videoPlayer.changeState(this.videoPlayer.state.playing);
    }

    stop() {
        console.log("It's stopped");
    }
}

class VideoPlayer {
    constructor() {
        this.status = "stopped";
        this.states = {
            playing: new PlayingState(this),
            stopped: new StoppedState(this)
        };
        this.initialize();
    }

    changeState(state) {
        if(this.state !== state) {
            this.state = state;
        }
    }

    play() {
        this.state.play();
    }

    stop() {
        this.state.stop();
    }
    
    initialize() {
        this.state = this.state.stopped;
    }
}

const videoPlayer = new VideoPlayer();
videoPlayer.play();
videoPlayer.play();
videoPlayer.stop();
videoPlayer.stop();
videoPlayer.play();
videoPlayer.stop();