const Album = require("./Album.js");
const AlbumService = require("./AlbumService.js");
const {
    LoadAlbumRequest,
    SaveAlbumRequest,
    UpdateAlbumRequest
} = require("./Requests.js");

const album = new Album({
    artist: "The Doors",
    title: "Strange Days",
    year: 1967
});

const service = new AlbumService();

(async () => {
    const response1 = await service.handleRequest(new SaveAlbumRequest(album));
    console.log(response1);
    const response2 = await service.handleRequest(new LoadAlbumRequest(album));
    console.log(response2);
    const response3 = await service.handleRequest(new UpdateAlbumRequest(album));
    console.log(response3);
})();