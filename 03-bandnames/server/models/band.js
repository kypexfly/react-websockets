const { randomUUID } = require("node:crypto");

class Band {
  constructor(name) {
    this.id = randomUUID();
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
