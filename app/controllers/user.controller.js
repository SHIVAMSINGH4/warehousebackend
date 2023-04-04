const User = require("../models/user.model")
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    
    if (req.body.username ==""){
        res.status(500).send({error: "Username can't be blank"})
    }
    else if (req.body.mobile_no ==""){
        res.status(500).send({error: "Mobile number can't be blank"})
    }
    else if (req.body.email ==""){
        res.status(500).send({error: "Email can't be blank"})
    }
    else if (req.body.password ==""){
        res.status(500).send({error: "password can't be blank"})
    }
    
  
    bcrypt.hash(req.body.password,8,(err,hash)=>{
        if (err){
            res.status(500).send({error: err})
        }
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            mobile_no: req.body.mobile_no,
            branch_code:req.body.branch_code
        
        });
        


        user.save((err)=>{
            if(err){
                res.status(500).send({error: err})
            }
            res.status(200).send({
                message: "Signup Successfully!",
            });
            
        })
    })
    
};


exports.signin = (req, res) => {
    if (!req.body.hasOwnProperty('mobile_no') || req.body.mobile_no ==""){
        res.status(500).send({error: "Mobile number can't be blank or has not sent proper key in body"})
    }
    else if(req.body.password ==""){
        res.status(500).send({error: "Password can't be blank"})
    }
    User.findOne({
        mobile_no: req.body.mobile_no
    }).exec(async (err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "Number Not found." });
        }
  
        let passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!",
          });
        }
        
        let token = jwt.sign(
            { username: user.username, number: user.number },
            config.secret,
            {
              expiresIn: config.jwtExpiration,
            }
        );

        
        res.status(200).send({
            id: user._id,
            branch_code:user.branch_code,
            username: user.username,
            number: user.number,
            access: token,
            message: "Login Successfully!",
        });
      });
       
};


