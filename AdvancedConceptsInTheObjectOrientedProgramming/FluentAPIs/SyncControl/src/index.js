const SyncControl = require("./SyncControl.js");
const control = new SyncControl();
control
    .play()
    .pause()
    .select(7)
    .play()
    .next()
    .previous()
    .play()
    .stop()