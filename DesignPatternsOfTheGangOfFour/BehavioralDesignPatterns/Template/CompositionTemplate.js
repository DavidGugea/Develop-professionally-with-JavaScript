class Database {
    getObjects(getResultsTemplateMethod) {
        this.connect();
        const result = getResultsTemplateMethod();
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

const database = new Database();
const artists = database.getObjects(
    () => {
        console.log("Get Results");

            return [{
                name: "Deep Purple"
                },
                {
                    name: "Queens of the Stone Age"
                }
            ];
    }
);
console.log(artists);