const Product = require("../models/product.model")

exports.getProduct = (req, res) => {
    console.log(req.query.ITEMS_REF)
    console.log(req.query.O_E_REF)
    Product.find({
        $or:
            [
                { O_E_REF:  req.query.O_E_REF  },
                { ITEMS_REF:req.query.ITEMS_REF } 

            ]
    }, { "__v": 0, "_id": 0 })

        .exec((err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({
                data
            });
        })

}


exports.addProduct = (req, res) => {

    const pro = new Product(req.body)

    pro.save((err) => {
        if (err) {
            res.status(500).send({ error: err })
        }
        res.status(200).send({
            message: "Product Added",
        });

    })

}