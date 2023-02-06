import Db from "./db/index";

export default class Auth {
  constructor(obj) {
    this.db = new Db(obj.connectionObject, obj.authModel, obj.authFields);
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
