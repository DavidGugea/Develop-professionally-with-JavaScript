class RecordStore {
    constructor(name) {
        this.name = name;
        this.albums = [];
        this.next = null;
    }

    setNext(recordStore) {
        this.next = recordStore;
    }

    requestAlbum(albumTitle) {
        if (this.albums.indexOf(albumTitle) >= 0) {
            console.log(`${this.name}: I have this album`);
        } else {
            console.log(`${this.name}: I don't have this album`);
            if (this.next) {
                this.next.requestAlbum(albumTitle);
            }
        }
    }
}

const recordStore1 = new RecordStore("Record Store 1");
const recordStore2 = new RecordStore("Record Store 2");
const recordStore3 = new RecordStore("Record Store 3");
const recordStore4 = new RecordStore("Record Store 4");
const recordStore5 = new RecordStore("Record Store 5");

recordStore1.setNext(recordStore2);
recordStore2.setNext(recordStore3);
recordStore3.setNext(recordStore4);
recordStore4.setNext(recordStore5);

recordStore5.albums.push("Blues for the red sun");
recordStore1.requestAlbum("Blues for the red sun");

/*
Output:

Record Store 1: I don't have this album
Record Store 2: I don't have this album
Record Store 3: I don't have this album
Record Store 4: I don't have this album
Record Store 5: I have this album
*/