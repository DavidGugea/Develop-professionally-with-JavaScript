const artists = [
    "artist1",
    "artist2",
    "artist3",
    "artist4",
];

const iterator = artists.entries();
let artist = iterator.next();

while (!artist.done) {
    console.log(artist);
    let artist = iterator.next();
}