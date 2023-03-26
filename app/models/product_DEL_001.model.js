const mongoose = require("mongoose");


const Product = mongoose.model(
  "Product_DEL_001",
  new mongoose.Schema(
    {
      "SAPREF": String,
      "ITEMS_REF": String,
      "OE_REF": String,
      "REF_TYPE": String,
      "Descripation": String,
      "APPLICATION": String,
      "UNIT": String,
      "LOC": String,
      "MRP": Number,
      "MAKE": String,
      "OP_BAL": Number,
      "PUR": String,
      "SALES": Number,
      "QTY": Number,
      "STORE": String
    },{timestamps:true}
  )
);

module.exports = Product;







// {"OE_REF": String,
//       "Descripation": String,
//       "APPLICATION": String,
//       "UNIT": String,
//       "MAKER": [
//         {
//           "MAKE": String,
//           "BRAND_NAME": String,
//           "SAPREF": String,
//           "ITEMS_REF": String,
//           "LOCATION": [
//             {
//               "BRANCH_CODE": {
//                 type: String,
//                 required: true,
//                 enum: [
//                   "Mun01", "DEL01", "GGN01"
//                 ]
//               }
//               ,
//               "STOCK": {
//                 "QUANTITY": Number,
//                 "OLD_MRP": Number,
//                 "NEW_MRP": Number,
//                 "SALES": Number
//               }
//             }
//           ]
//         }
//       ]
//     }