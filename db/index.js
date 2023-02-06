const { DatabaseError } = require("../errors/index");
const TYPES = require("../types/index");

/* 

Mongoose
MySQL NodeJS connector

*/

export default class Db {
  constructor(obj) {
    this.type = obj.type;
    switch (this.type) {
      case TYPES.MONGODB:
        // Write raw queries
        return;
      case TYPES.MYSQL:
        // Write raw queries
        return;

      case TYPES.MONGOOSE:
        const mongoose = require("mongoose");
        return;

      case TYPES.SEQUELIZE:
        const sequelize = require("sequelize");
        return;

      case TYPES.PRISMA:
        const mongoose = require("prisma");
        return;
    }
  }
  find() {}
}

module.exports = {
  Db,
};
