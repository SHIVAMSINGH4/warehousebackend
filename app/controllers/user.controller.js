// const db = require("../models");
// const { user: User, role: Role } = db;
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")
exports.signup = (req, res) => {
    
    if (req.body.username ==""){
        res.status(500).send({error: "Username can't be blank"})
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
            password: hash
          });
          
        user.save((err,res)=>{
            if(err){
                console.log(err)
                console.log("not user")
                // res.status(500).send({error: err})
            }
            else{
                console.log("user")
                // res.status(200).send({ message: "User was registered successfully!" })
            }
        })
    })
  
     
    
      
    
};

exports.test = (req, res) => {
    res.send({ message: "User was registered successfully!" });
}