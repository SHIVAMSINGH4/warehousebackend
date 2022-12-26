const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    phoneNO: String

  })
);

module.exports = Customer;