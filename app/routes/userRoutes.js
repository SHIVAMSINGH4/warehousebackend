const controller = require("../controllers/user.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/v1/api/auth/signup",controller.signup);
    app.post("/v1/api/auth/login",controller.signin);

   
  };