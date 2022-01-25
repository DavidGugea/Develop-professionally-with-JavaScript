const artists = ["Kyuss", "QOTSA", "Ben Harper", "Monster Magnet"];
const artistWrapper = {};
artistsWrapper.artists = artists;
artistsWrapper[Symbol.iterator] = function() {
    const artists = this.artists;
    let counter = this.artists.length - 1;

    return {
        next: function() {
            if (counter < 0) {
                return {
                    done: true
                };
            } else {
                return {
                    value: artistWrapper[counter--],
                    done: false
                };
            }
        }
    }
};

for(let artists of artistWrapper) {
    console.log(artist);
}