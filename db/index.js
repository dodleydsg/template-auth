import { DatabaseError } from "../errors/index";

/* 

Mongoose
MySQL NodeJS connector

*/

export default class Db {
  constructor(connectionObject) {
    if (connectionObject.type === "mongo") {
      this.mode == "mongodb";
    } else if (connectionObject.type === "mysql") {
      this.mode = "mysql";
    }
  }
  find() {}
}
