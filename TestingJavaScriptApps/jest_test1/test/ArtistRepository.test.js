const ArtistRepository = require("../src/ArtistRepository.js");
const assert = require("assert");

describe(
    "ArtistRepository",
    () => {
        describe("#add()", () => {
            it("should add the artist and increase the number of all artists" , 
            () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                artistRepository.add({name : "name2"});
                expect(artistRepository.getAll().length).toBe(2);
            });
            it("should add the artist and increase the number of all artists" , 
            () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                artistRepository.add({name : "name1"});
                expect(artistRepository.getAll().length).toBe(1);
            });
        });

        describe("#clearAll()" , () => {
            it("should clear all artists", () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                expect(artistRepository.getAll().length).toBe(1);
                artistRepository.clearAll();
                expect(artistRepository.getAll().length).toBe(0);
            });
        });
    }
);