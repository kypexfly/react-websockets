const Ticket = require("./ticket");

class TicketList {
  coonstructor() {
    this.lastNumber = 0;
    this.pendings = [];
    this.asigned = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get lastThirteen() {
    return this.asigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendings.push(newTicket);
    return newTicket;
  }

  assignTicket(agent, desk) {
    if (this.pendings.length === 0) {
      return null;
    }

    const nextTicket = this.pendings.shift();

    nextTicket.agent = agent;
    nextTicket.desk = desk;

    this.asigned.push(nextTicket);
    return nextTicket;
  }
}

module.exports = TicketList;
