class Album {
    constructor(artist, title, year, price) {
        this.artist = artist;
        this.title = title;
        this.year = year;
        this.price = price;
    }

    accept(visitor) {
        visitor.visit(this);
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice){
        this.price = newPrice;
    }

    toString() {
        return `${this.artist} : ${thist.title} (${this.year}) ${this.price}$`;
    }
}

class Discount {
    constructor(discount) {
        this.discount = discount;
    }

    visit(album) {
        album.setPrice(Math.round(album.getPrice() * this.discount));
    }
}

const albums = [
    new Album("The Doors", "Title 1", 1967, 10),
    new Album("The Doors", "Title 2", 1967, 10),
    new Album("The Doors", "Title 3", 1967, 10),
    new Album("The Doors", "Title 4", 1967, 10),
];

const visitorDiscount = new Discount(0.8);
albums.forEach((album) => {
    album.accept(visitorDiscount);
    console.log(album.toString());
})