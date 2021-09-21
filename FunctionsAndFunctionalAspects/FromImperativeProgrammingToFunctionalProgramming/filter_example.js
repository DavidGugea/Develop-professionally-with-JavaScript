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

/* IMPERATIVE PROGRAMMING
const releasedBefore2000 = new Array();
for(let i = 0 ; i < albums.length ; i++){
    if(albums[i].released < 2000){
        releasedBefore2000.push(albums[i]);
    }
}

console.log(releasedBefore2000);
*/

const releasedBefore2000 = albums.filter(
    (value, index, array) => {
        return value.released < 2000;
    }
);

console.log(releasedBefore2000);