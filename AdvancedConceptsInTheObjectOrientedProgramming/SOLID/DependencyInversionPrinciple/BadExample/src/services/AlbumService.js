const Album = require("../model/Album.js");
const MongoDBAlbumRepository = require("../persistence/MongoDBAlbumRepository.js");

module.exports = class AlbumService {
    constructor() {
        this._repository = new MongoDBAlbumRepository();
    }

    createAlbum(artist, title, year) {
        const album = new Album({artist, title, year});
        this._repository.save(album);
    }
}