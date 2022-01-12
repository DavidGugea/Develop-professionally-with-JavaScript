const FluentAsyncControlOriginalAPI = require("./FluentAsyncControlOriginalAPI.js");
const control = FluentAsyncControlOriginalAPI.build();
const originalAPI = control.instance();

control
    .play()
    .pause()
    .select(7)
    .play()
    .next()
    .previous()
    .play()
    .stop()