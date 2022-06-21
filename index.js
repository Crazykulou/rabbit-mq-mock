#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error, connect) {
    if (error) {
        throw error;
    }
    connect.createChannel(function (error, channel) {
        if (error) {
            throw error;
        }

        var queue = 'hello queue';
        var msg = 'hello world!';

        channel.assertQueue(queue, {
            durable: false
        })
        channel.sendToQueue(queue, Buffer.from(msg));

    })
    setTimeout(() => {
        connect.close();
        process.exit(0);
    }, 500);
})