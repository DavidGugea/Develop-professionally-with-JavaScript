'use strict';
const amqp = require("amqplib");
const configuration = { /* configs */}

const queue = 'example-queue';
amqp.connect(configuration)
    .then(connection => connection.createChannel())
    .then(channel => {
        return channel.assertQueue(queue).then(ok => {
            return channel.consume(queue, message => {
                if (message !== null ) {
                    console.log(message.connect.toString());
                    channel.ack(message);
                }
            })
        })
    })