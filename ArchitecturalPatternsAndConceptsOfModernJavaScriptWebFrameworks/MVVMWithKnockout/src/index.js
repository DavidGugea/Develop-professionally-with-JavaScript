const ko = require("knockout");

const Album = function(title, artist) {
    this.title = ko.observable(title);
    this.artist = ko.observable(artist);
}

function AlbumViewModel() {
    this.avaiableArtists = [
        { name: "Name1" },
        { name: "Name2" }
    ];

    this.albums = ko.observableArray([
        new Album("Title 1", this.avaiableArtists[0]),
        new Album("Title 2", this.avaiableArtists[0]),
        new Album("Title 3", this.avaiableArtists[1]),
        new Album("Title 4", this.avaiableArtists[1]),
    ]);

    this.addAlbum = () => {
        this.albums.push(new Album('', this.avaiableArtists[0]));
    }

    this.removeAlbum = album => {
        this.albums.remove(album);
    }
}

ko.applyBindings(new AlbumViewModel());