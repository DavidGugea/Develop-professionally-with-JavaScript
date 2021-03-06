'use strict';
const USERNAME = '';
const PASSWORD = '';
const VHOST = '';
const URL = "ws://localhots:61613/ws";
const ws = new WebSocket(url);
ws.onerror = (error) => console.error(error);

const client = webstomp.over(ws, { "binary" : true });
client.connect(
    USERNAME,
    PASSWORD,
    handleConnect,
    handleError,
    VHOST
);

function handleConnect() {
    client.subscribe('example-queue', message => {
        console.log(message.headers);
        let content = JSON.parse(message.body);
    });
}

function handleError() {
    console.log("Error");
}