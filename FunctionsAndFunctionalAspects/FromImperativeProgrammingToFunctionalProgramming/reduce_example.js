const artists = [
    {
        name : "Nick Cave",
        albums : [
            {
                title : "Push the Sky Away"
            },
            {
                title : "No more shall we part"
            }
        ]
    },
    {
        name : "Ben Harper",
        albums : [
            {
                title : "Live from Mars"
            },
            {
                title : "The Will to Live"
            }
        ]
    }
];

/* IMPERATIVE PROGRAMMING
let totalNumberOfAlbums = 0;
for(let i = 0 ; i < artists.length ; i++){
    totalNumberOfAlbums += artists[i].albums.length;
}

console.log(totalNumberOfAlbums);
*/

const totalNumberOfAlbums = artists.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue.albums.length;
    },
    0
);

console.log(totalNumberOfAlbums);