const express = require('express');
const ejs = require('ejs');
const path = require('path')
const appconfig = require("./application");
const router = require("./router");

const app = express();
app.engine('ejs', ejs.__express);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(9090, '127.0.0.1', () => {
    console.log("Server running...")
})