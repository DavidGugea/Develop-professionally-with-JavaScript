class Album{
    constructor(title, year, artist, id, member, price) {
        this.title = title;
        this.year = year;
        this.artist = artist;
        this.id = id;
        this.member = member;
        this.price = price;
    }
}

const getRandomID = (min, max) => {
    return `${Math.floor(Math.random() * (max - min) + min)}`;
}

const albums = [];
for(let i = 0 ; i < 1000000 ; i ++) {
    albums.push(new Album("Title", 200, "Arist", getRandomID(1, 10), "Member" +i));
}