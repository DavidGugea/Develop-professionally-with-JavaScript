const artists = [
  "artist1",
  "artist2",
  "artist3",
  "artist4",
];
const artistsWrapper = {}
artistsWrapper.artists = artists;

artistsWrapper[Symbol.iterator] = function(){
  const artists = this.artists;
  let counter = this.artists.length - 1;

  // Return value of the iterator;
  return {
    next(){
      if ( counter < 0) {
        return {
          done : true
        };
      }else{
        return {
          value : artists[counter--],
          done : false
        };
      }
    }
  }
};

const iterator = artistsWrapper[Symbol.iterator]();
let artist = iterator.next();
while(!artist.done){
  console.log(artist);
  artist = iterator.next();
}
