const Album = require("./RightExample/Album.js");
const AlbumRepository = require("./RightExample/AlbumRepository.js");

const album = new Album({
    artist: "The Doors",
    title: "Strange Days",
    year : 1967
});
const repository = new AlbumRepository();
repository
    .save()
    .then(() => console.log("Album saved"))
    .catch((error) => console.log(error));

/*
const Album = require("./WrongExample");
const album = new Album({
    artist: "The Doors",
    title: "Strange Days",
    year : 1967
});
album
    .save()
    .then(() => console.log("Album saved"))
    .catch((error) => console.log(error));
*/