const TYPES = require("../types/index");

async function connect(c_type) {
  switch (c_type) {
    case TYPES.MONGOOSE:
      const mongoose = require("mongoose");
      try {
        await mongoose.connect("mongodb://127.0.0.1:27017/template_auth");
      } catch (error) {
        console.log(error);
      }

      break;
    case TYPES.MONGODB:
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
