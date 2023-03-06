const mongoose = require("mongoose");
const Schema= mongoose.Schema
const Bill = mongoose.model(
    "Bill",
    new mongoose.Schema({
        "ITEMS REF": String,
        "O_E REF": String,
        "REF": String,
        "CUSTOMER": {
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }


    })
);

module.exports = Bill;