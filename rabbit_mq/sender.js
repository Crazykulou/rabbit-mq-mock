#!usr/bin/env node

var amqp = require('amqplib/callback_api');
const appconfig = require("../application");
const aes = require("../aes");

function send (queue, msg) {
    amqp.connect(appconfig.rabbitmqConfig, function (error, connect) {
        if (error) {
            throw error;
        }
        connect.createChannel(function (error, channel) {
            if (error) {
                throw error;
            }
            channel.assertExchange()
            channel.assertQueue(queue, {
                durable: false
            })
            channel.sendToQueue(queue, Buffer.from(aes.encrypto(msg)));
        })
        setTimeout(() => {
            connect.close();
        }, 500);
    });
}

module.exports = {
    send,
}