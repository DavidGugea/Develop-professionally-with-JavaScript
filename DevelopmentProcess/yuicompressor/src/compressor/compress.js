const compressor = require("yuicompressor");

compressor.compress(
    "../index.js", {
        charset: "utf-8",
        type: "js",
    },
    (err, data, extra) => {
        if (err) {
            console.log("-".repeat(150));
            console.error("An error has occurred:");
            console.error(err);
        }
        if (data) {
            console.log("-".repeat(150));
            console.log("Compressed file:");
            console.log(data)
        }
        if (extra) {
            console.log("-".repeat(150));
            console.warn("Extra info:");
            console.warn(extra);
        }
    }
);