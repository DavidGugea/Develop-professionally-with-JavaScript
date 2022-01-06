const casper = require("casperjs").create();

casper.start("https://www.rheinwerk-verlag.de", () => {
    this.echo(this.getTitle());
})