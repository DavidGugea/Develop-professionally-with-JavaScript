const { Mediator } = require("mediator-js");
const chatroom = new Mediator();

class User {
    constructor(name) {
        this.name = name;
    }

    log(message) {
        console.log(`${this.name} got this message: ${message}`);
    }
}

const topic = "Topic";
const user1 = new User("Max");
const user2 = new User("Moritz");

chatroom.subscribe(topic, user1.log.bind(user1));
chatroom.subscribe(topic, user2.log.bind(user2));
chatroom.publish(topic, "Hello");