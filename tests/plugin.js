const TYPES = require("../types/index");

async function connect(c_type) {
  switch (c_type) {
    case TYPES.MONGOOSE:
      const mongoose = require("mongoose");
      try {
        await mongoose.connect(process.env.MONGO_URI);
      } catch (error) {
        console.log(error);
      }

      break;
    case TYPES.MONGODB:
        const { MongoClient } = require("mongodb");
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        let databasesList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));


      break;

    case TYPES.PRISMA:
      break;

    case TYPES.SEQUELIZE:
      break;

    default:
      break;
  }
}

module.exports = {
  connect,
};
