const albums = [
    {
        title : "Pus the Sky Away",
        artist : "Nick Cave",
        released : 2013
    },
    {
        title : "No more shall we part",
        artist : "Nick Cave",
        released : 2001
    },
    {
        title : "Live from Mars",
        artist : "Ben Harper",
        released : 2003
    },
    {
        title : "The Will to Live",
        artist : "Ben Harper",
        released : 1997
    }
];

albums
    .filter((album) => album.released > 2000)
    .forEach(console.log);