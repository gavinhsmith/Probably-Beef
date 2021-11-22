const server = require("./server");

server.listen(server.config.port, _ => {
    console.info(`Started Server on *:${server.config.port}!`);
});