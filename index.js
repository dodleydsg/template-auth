require("dotenv").config();
const Db = require("./db/index");
const TYPES = require("./types");

class Auth {
  constructor(obj) {
    this.db = new Db(
      obj.connectionObject,
      obj.authModel,
      obj.authFields,
      obj.type
    );
  }

  async login(req, res, next) {
    // Get user, authenticate, set cookier and return appropriate message
    return;
  }

  async logout(req, res, next) {
    // Clear cookie and return appropriate message
    return;
  }

  async register(req, res, next) {
    // Register user into database and return appropriate message
  }
}

module.exports = {
  default: Auth,
  TYPES,
};
