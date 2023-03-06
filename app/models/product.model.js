const mongoose = require("mongoose");


const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    "SAPREF": String,
    "ITEMS_REF": String,
    "O_E_REF": String,
    "MEYLE_REF_1": String,
    "MAHLE_REF_2": String,
    "MAAN_REF_3": String,
    "Descripation": String,
    "APPLICATION": String,
    "UNIT": String,
    "LOC": String,
    "MRP": Number,
    "MAKE": String,
    "NEW_MRP": Number,
    "OP_BAL": Number,
    "PUR": String,
    "SALES": Number,
    "QTY_BY_STORE":[
      {
        "QTY": Number,
        "STORE": String
      }
    ]

    

  })
);

module.exports = Product;

// {
//   "SAPREF": String,
//   "O_E REF": String,
//   "MAKER":[
//     {
//       "BRAND_NAME": String,
//       "ITEMS_REF": String,
//       "LOCATION":[
//         {"GGN":
//           {
//             "QUANTITY":Number,
//             "OLD_MRP":Number,
//             "NEW_MRP":Number,
//             "SALES":NUMBER
//           }            
//         }
//       ]
//     }
//   ],
//   "Descripation": String,
//   "APPLICATION": String,
//   "UNIT": String,
// }