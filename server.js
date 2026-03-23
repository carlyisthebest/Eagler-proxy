const WebSocket = require("ws");

const port = process.env.PORT || 3000;

const server = new WebSocket.Server({ port });

server.on("connection", socket => {
  console.log("Player connected");

  socket.on("message", message => {
    console.log("Received:", message.toString());
  });
});

console.log("Proxy running on port " + port);
