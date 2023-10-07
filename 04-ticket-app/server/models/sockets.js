const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Client connected");

      socket.on("require-ticket", (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on("next-ticket", ({ agent, desk }, callback) => {
        const nextTicket = this.ticketList.assignTicket(agent, desk);
        callback(nextTicket);

        this.io.emit("ticket-assigned", this.ticketList.lastThirteen);
      });
    });
  }
}

module.exports = Sockets;
