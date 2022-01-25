class Database {
    getObjects() {
        this.connect();
        const result = this.getResults();
        this.disconnect();
        return result;
    }

    connect() {
        console.log("Connect");
    }

    disconnect() {
        console.log("Disconnect");
    }
}

class ArtistRepository extends Database {
    getResults() {
        console.log("Get Results");

            return [{
                name: "Deep Purple"
                },
                {
                    name: "Queens of the Stone Age"
                }
            ];
    }
}

const artistRepository = new ArtistRepository();
const artists = artistRepository.getObjects();
console.log(artists);