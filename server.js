// Modules
const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const http = require("http");
const router = require("./router");

// Config
let helmetconf = require("./config/helmet");
let webconf = require("./config/web");
let hbsconf = require("./config/handlebars");

// Express App
const app = express();

// Enable Handlebars
app.engine(".hbs", hbsconf);
app.set('view engine', '.hbs');
app.set("views", "./views");

// Enable Helmet
app.use(helmetconf);

// Enable the "/public" directory.
app.use(express.static(path.join(__dirname, "/public")));

// Use the app router
app.use(router);

// Export the server
module.exports = http.createServer(app);
exports.express = app;
exports.config = webconf;