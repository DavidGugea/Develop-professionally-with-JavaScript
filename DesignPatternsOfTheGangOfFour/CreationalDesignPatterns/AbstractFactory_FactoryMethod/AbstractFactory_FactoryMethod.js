class Viny1 {
    constructor(config) {
        this.color = config.color || "black";
        this.name = config.name || "Untitled";
        this.artist = config.artist || "VA";
    }
}

class LP extends Viny1 {
    constructor(config) {
        super(config);
        this.diameter = config.diameter || 30;
    }
}

class EP extends Viny1 {
    constructor(config) {
        super(config);
        this.diameter = config.diameter || 17.5;
    }
}

class Viny1Factory {
    constructor() {
        this.viny1Class = LP;
    }

    create(config) {
        switch(config.viny1Type){
            case 'lp':
                this.viny1Class = LP;
                break;
            case 'ep':
                this.viny1Class = EP;
                break;
        }

        return new this.viny1Class(config);
    }
}

const viny1Factory = new Viny1Factory();

const ep = viny1Factory.create({
    viny1Type: "ep",
    color: "yellow"
});

const lp = viny1Factory.create({
    viny1Factory: 'lp',
    name: "Third eye Surgery",
    artist: "Baby Woodrose"
});

console.log(ep instanceof EP);
console.log(ep.diameter);
console.log(lp instanceof LP);
console.log(lp.diameter);