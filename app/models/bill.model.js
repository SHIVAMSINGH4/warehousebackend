const mongoose = require("mongoose");
const Schema = mongoose.Schema
const Bill = mongoose.model(
    "Bill",
    new mongoose.Schema({

        "PRODUCTS": [{
            "ITEMS_REF": String,
            "LOCATION": String,
            "QUANTITY": Number
        }],
        "CUSTOMER": {
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }


    })
);

module.exports = Bill;