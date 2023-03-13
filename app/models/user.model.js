const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    mobile_no:{
      type: Number,
      required: true

    },
    branch_code: {
      type: String,
      required: true,
      enum: [
        "Mun001", "DEL001", "GGN001"
      ]
    },
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
