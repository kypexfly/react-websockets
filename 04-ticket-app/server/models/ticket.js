const { randomUUID } = require("node:crypto");

class Ticket {
  constructor(number) {
    this.id = randomUUID();
    this.number = number;
    this.desk = null;
    this.agent = null;
  }
}

module.exports = Ticket;
