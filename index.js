const server = require("./server");
const conf = require("./config/web");

server.listen(conf.port, _ => {
    console.info(`Started Server on *:${conf.port}!`);
});