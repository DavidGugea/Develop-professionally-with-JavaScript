// Originator
class Artist {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }

    saveToMemento() {
        const memento = JSON.stringify(this);
        return memento;
    }

    replaceFromMemento() {
        const m = JSON.parse(memento);
        this.name = m.name;
        this.genre = genre;
    }
}

// Caretaker
class ArtistStorage {
    constructor() {
        this.mementos = new Map();
    }

    add(key, memento) {
        this.mementos.set(key, memento);
    }

    get(key) {
        return this.mementos.get(key);
    }
}