const mongoose = require("mongoose");

const Bill = mongoose.model(
    "Bill",
    new mongoose.Schema({

        "PRODUCTS": [{
            "ITEMS_REF": String,
            "LOCATION": String,
            "QUANTITY": Number
        }],
        "Bill_no": Number,
        


    },{timestamps:true})
);

module.exports = Bill;