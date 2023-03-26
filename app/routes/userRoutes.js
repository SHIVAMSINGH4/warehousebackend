const userController = require("../controllers/user.controller");
const productController_mun_001= require("../controllers/product_MUN_001.controller")
const productController_del_001= require("../controllers/product_DEL_001.controller")
const productController_ggn_001= require("../controllers/product_GGN_001.controller")
const billController = require("../controllers/bill.controller")
module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/v1/api/auth/signup",userController.signup);
    app.post("/v1/api/auth/login",userController.signin);

    app.get("/v1/api/auth/getAllProduct/MUN_001",productController_mun_001.getAllProduct);
    app.get("/v1/api/auth/getProductSearching/MUN_001",productController_mun_001.getProductSearching);
    app.post("/v1/api/auth/addNewProduct/MUN_001",productController_mun_001.addProduct);
    app.put("/v1/api/auth/updateProduct/MUN_001",productController_mun_001.updateFullProduct)

    app.get("/v1/api/auth/getAllProduct/DEL_001",productController_del_001.getAllProduct);
    app.get("/v1/api/auth/getProductSearching/DEL_001",productController_del_001.getProductSearching);
    app.post("/v1/api/auth/addNewProduct/DEL_001",productController_del_001.addProduct);
    app.put("/v1/api/auth/updateProduct/DEL_001",productController_del_001.updateFullProduct)


    app.get("/v1/api/auth/getAllProduct/GGN_001",productController_ggn_001.getAllProduct);
    app.get("/v1/api/auth/getProductSearching/GGN_001",productController_ggn_001.getProductSearching);
    app.post("/v1/api/auth/addNewProduct/GGN_001",productController_ggn_001.addProduct);
    app.put("/v1/api/auth/updateProduct/GGN_001",productController_ggn_001.updateFullProduct)
    
    app.get("/v1/api/auth/getCustomerBill",billController.getBill);
    app.post("/v1/api/auth/addCustomerBill",billController.addBill)
    app.get("/v1/api/auth/getCustomerBillHistory",billController.bill_by_customer)
    app.post("/v1/api/auth/getBill_ByDate",billController.bill_by_date)
    
  };