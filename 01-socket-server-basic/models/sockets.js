class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.on("message-to-server", (data) => {
        console.log(data);
        // io emits to all connected clients
        this.io.emit("message-to-client", data);
      });
    });
  }
}

module.exports = Sockets;
