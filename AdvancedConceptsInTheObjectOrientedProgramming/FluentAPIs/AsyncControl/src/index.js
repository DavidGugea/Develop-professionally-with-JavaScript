const FluentAsyncControl = require("./FluentAsyncControl.js");
const control = FluentAsyncControl.build();

control
    .play()
    .pause()
    .select(7)
    .play()
    .next()
    .previous()
    .play()
    .stop()