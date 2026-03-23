const WebSocket = require("ws");
const net = require("net");

const MC_HOST = "YOURSERVER.aternos.me";
const MC_PORT = 25565;

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on("connection", function(ws) {

    const socket = new net.Socket();

    socket.connect(MC_PORT, MC_HOST);

    ws.on("message", function(msg) {
        socket.write(msg);
    });

    socket.on("data", function(data) {
        ws.send(data);
    });

});
