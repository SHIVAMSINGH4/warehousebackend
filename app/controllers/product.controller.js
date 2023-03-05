const Product = require("../models/product.model")

exports.getProduct = (req,res) => {
    Product.find({},{"__v": 0})

    .exec((err,data)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }
        res.status(200).send({
            data
        });
    })

}


exports.addProduct = (req,res) => {
    
    const pro = new Product(req.body)

    pro.save((err)=>{
        if(err){
            res.status(500).send({error: err})
        }
        res.status(200).send({
            message: "Product Added",
        });
        
    })

}