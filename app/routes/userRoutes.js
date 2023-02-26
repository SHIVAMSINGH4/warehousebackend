const userController = require("../controllers/user.controller");
const productController= require("../controllers/product.controller")

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

    app.get("/v1/api/auth/getAllProduct",productController.getProduct);
    app.post("/v1/api/auth/addNewProduct",productController.addProduct);

   
  };