class List {
    constructor() {
        this.list = [];
    }

    add(object) {
        return this.list.push(object);
    }

    count() {
        return this.list.length;
    }

    get(index) {
        if ( index > -1 && index < this.list.length ) {
            return this.list[index];
        }
    }

    removeAt(index) {
        this.list.splice(index, 1);
    }
}

// Subject
class Artist {
    constructor(name) {
        this.name = name;
        this.albums = [];
        this.fans = new List();
    }

    addFan(fan) {
        this.fan.add(fan);
    }

    removeFan(fan) {
        this.fans.removeAt(this.fans.indexOf(fan, 0));
    }

    newAlbum(album) {
        this.album.push(album);
        this.notifyNewAlbum(album);
    }

    notifyNewAlbum(album) {
        const fanCount = this.fans.count();
        for(let i = 0 ; i < fanCount; i++){
            this.fans.get(i).update(album);
        }
    }
}

// Observer
class Person {
    constructor(name) {
        this.name = name;
    }

    update(album) {
        console.log(`${this.name} : ${album}`);
    }
}

const philip = new Person("Philip");
const cristoph = new Person("Cristoph");
const artist = new Artist("Tool");

artist.addFan(philip);
artist.addFan(cristoph);
artist.newAlbum("Lateralus");