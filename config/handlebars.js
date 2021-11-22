const {engine} = require("express-handlebars");

module.exports = engine({
    extname: ".hbs",
    defaultLayout: "main"
});