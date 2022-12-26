const mongoose = require("mongoose");


const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    storeID: Number,
    productID: String,
    productName: String,
    productDesc: String,
    productCategory: String,
    qty: Number,
    price: Number,
    rating: {
       type: Number,
       enum: [0,1,2,3,4,5] 
    },
    isActive: {
        type: Number,
        enum: [1,0]
    },
    discount: Number
    


  })
);

module.exports = Product;