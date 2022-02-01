'use strict';
const amqp = require("amqplib");
const configuration = { /* configs */ }

const queue = 'example-queue';
const key = 'example-key';
amqp.connect(configuration)
    .then(connection => connection.createChannel())
    .then(channel => {
        channel
            .assertExchange(exchange, 'direct')
            .then(ok => {
                return channel
                    .assertQueue(queue)
                    .then(ok => channel.bindQueue(queue, exhange, key))
            })
            .then(ok => {
                channel.publish(exchange, key, new Buffer.alloc("Hello World!"));
            })
    });