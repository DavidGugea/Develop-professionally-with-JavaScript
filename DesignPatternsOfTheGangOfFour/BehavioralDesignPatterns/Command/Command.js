class Button {
    constructor(command) {
        this.command = command;
        this.click = function() {
            command.execute();
        }
    }
}

class VideoPlayer {
    switchOn() {
        console.log("Switch On.");
    }

    switchOff() {
        console.log("Switch Off.");
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {

    }
}

class SwitchOnCommand extends Command {
    execute() {
        this.receiver.switchOn();
    }
}

class SwitchOffCommand extends Command {
    execute() {
        this.receiver.switchOff();
    }
}

const videoPlayer = new VideoPlayer();

const switchOnCommand = new SwitchOnCommand(videoPlayer);
const switchOffCommand = new SwitchOffCommand(videoPlayer);
const buttonOn = new Button(switchOnCommand);
const buttonOff = new Button(switchOffCommand);
buttonOn.click();
buttonOff.click();