const express = require("express");
const path = require("path");
const logger = require("morgan");
const server = express();

server.use(logger('dev'));

server.use('/home', express.static('assets'));

server.get('/:asset', async function (req, reply) {
    await reply.sendFile(path.resolve(`./${req.params.asset}`));
});
server.get('/assets/:asset', async function (req, reply) {
    await reply.sendFile(path.resolve(`./assets/${req.params.asset}`));
});
server.get('/assets/packages/cupertino_icons/assets/:asset', async function(req, reply) {
    await reply.sendFile(path.resolve(`./assets/packages/cupertino_icons/assets/${req.params.asset}`));
});
server.get('/assets/packages/font_awesome_flutter/lib/fonts/:asset', async function(req, reply) {
    await reply.sendFile(path.resolve(`./assets/packages/font_awesome_flutter/lib/fonts/${req.params.asset}`));
});
server.get('/assets/fonts/:asset', async function(req, reply) {
    await reply.sendFile(path.resolve(`./assets/fonts/${req.params.asset}`));
});
server.get('/', async function (req, reply) {
    await reply.sendFile(path.resolve('./index.html'));
});

Promise.resolve(server.listen(3000)).then(async () => {console.log("Server started.")})