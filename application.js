
// let fs = require("fs")
const yml = require("yamljs");

let crypto = {

};

let rabbitmq = {

}

let server = {

}

try {
    // let file = fs.readFileSync('./application.js', 'utf-8')
    const appconfig = yml.load('application.yml');
    let jsonStr = JSON.stringify(appconfig);
    let configJson = JSON.parse(jsonStr, null);
    crypto = configJson.crypto;
    console.log(crypto)
    rabbitmq = configJson.rabbitmq;
    server = configJson.server;
} catch (e) {
    console.log(e)
}


function cryptoConfig() {
    return crypto;
}

function rabbitmqConfig() {
    return rabbitmq;
}

function serverConfig() {
    return server;
}

module.exports = {
    cryptoConfig,
    rabbitmqConfig,
    serverConfig,
}