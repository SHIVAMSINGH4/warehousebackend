const mongoose = require("mongoose");
const Schema= mongoose.Schema
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    "phoneNO": String,
    "billNo": []

  })
);

module.exports = Customer;