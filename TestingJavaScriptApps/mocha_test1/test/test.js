const ArtistRepository = require("../src/ArtistRepository")
const assert = require("assert");
const mocha = require("mocha");

describe("ArtistRepository", () => {
    describe("add", () => {
        it(
            "should add the artist and increase the number of all artists",
            () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                artistRepository.add({name : "name2"});
                assert.equal(artistRepository.getAll().length, 2);
            }
        );

        it(
            "should add the artist only if it is not already there",
            () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                artistRepository.add({name : "name1"});
                assert.equal(artistRepository.getAll().length, 1);
            }
        );
    });

    describe("clearAll()", () => {
        it(
            "should clear all the artists",
            () => {
                const artistRepository = new ArtistRepository();
                artistRepository.add({name : "name1"});
                assert.equal(artistRepository.getAll().length, 1);
                artistRepository.clearAll();
                assert.equal(artistRepository.getAll().length, 0);
            }
        );
    });
});