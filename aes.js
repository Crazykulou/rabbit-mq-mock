let crypto = require("crypto-js");
let appconfig = require("./application");

let cryptoConfig = appconfig.cryptoConfig();

function encrypto(msg) {
    let key = crypto.enc.Utf8.parse(cryptoConfig.key);
    let iv = crypto.enc.Utf8.parse(cryptoConfig.iv);
    let c = crypto.enc.Utf8.parse(msg);
    let encryptodData = crypto.AES.encrypt(c, key, {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    })
    let base64 = crypto.enc.Base64.stringify(encryptodData.ciphertext)
    console.log(base64);
    return hexData;
}

module.exports = {
    encrypto,
}

