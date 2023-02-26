const mongoose = require("mongoose");


const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    "SAPREF": String,
    "ITEMS REF": String,
    "O_E REF": String,
    "MEYLE REF_1": String,
    "MAHLE REF_2": String,
    "MAAN REF_3": String,
    "Descripation": String,
    "APPLICATION": String,
    "UNIT": String,
    "LOC": String,
    "QTY": Number,
    "MRP": Number,
    "MAKE": String,
    "NEW MRP": Number,
    "OP BAL": Number,
    "PUR": String,
    "SALES": Number

  })
);

module.exports = Product;

// storeID: Number,
//     productID: String,
//     productName: String,
//     productDesc: String,
//     productCategory: String,
//     qty: Number,
//     price: Number,
//     rating: {
//        type: Number,
//        enum: [0,1,2,3,4,5] 
//     },
//     isActive: {
//         type: Number,
//         enum: [1,0]
//     },
//     discount: Number