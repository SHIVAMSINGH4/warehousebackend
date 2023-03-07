const mongoose = require("mongoose");


const Product = mongoose.model(
  "Product",
  new mongoose.Schema(
    {
      "OE_REF": String,
      "Descripation": String,
      "APPLICATION": String,
      "UNIT": String,
      "MAKER": [
        {
          "MAKE": String,
          "BRAND_NAME": String,
          "SAPREF": String,
          "ITEMS_REF": String,
          "LOCATION": [
            {
              "BRANCH_CODE": {
                type: String,
                required: true,
                enum: [
                  "Mun01", "DEL01", "GGN01"
                ]
              }
              ,
              "STOCK": {
                "QUANTITY": Number,
                "OLD_MRP": Number,
                "NEW_MRP": Number,
                "SALES": Number
              }
            }
          ]
        }
      ]
    }
  )
);

module.exports = Product;







// {
//   "SAPREF": String,
//   "ITEMS_REF": String,
//   "O_E_REF": String,
//   "MEYLE_REF_1": String,
//   "MAHLE_REF_2": String,
//   "MAAN_REF_3": String,
//   "Descripation": String,
//   "APPLICATION": String,
//   "UNIT": String,
//   "LOC": String,
//   "MRP": Number,
//   "MAKE": String,
//   "NEW_MRP": Number,
//   "OP_BAL": Number,
//   "PUR": String,
//   "SALES": Number,
//   "QTY_BY_STORE":[
//     {
//       "QTY": Number,
//       "STORE": String
//     }
//   ]
// }