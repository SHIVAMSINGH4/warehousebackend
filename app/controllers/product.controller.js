const Product = require("../models/product.model")



exports.getAllProduct = (req, res) => {

    Product.find()
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

exports.getProductSearching = (req, res) => {
    console.log(req.query.ITEMS_REF)
    console.log(req.query.OE_REF)
    Product.find({
        $or:
            [
                { OE_REF: req.query.OE_REF },
                { MAKER: {$elemMatch: {ITEMS_REF:req.query.ITEMS_REF}} }

            ]
    })

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
    Product.find({ OE_REF: req.body.OE_REF })
        .exec((err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            else if (data.length > 0) {
                res.status(200).send({
                    "Message": "Data Already exist, you can only update that data",
                    data
                });
            }
            const pro = new Product(req.body)
            pro.save((err) => {
                if (err) {
                    res.status(500).send({ error: err })
                }
                res.status(200).send({
                    message: "Product Added"
                });

            })

        })



}

exports.updateProduct = async(req,res)=>{
    console.log(req.query.OE_REF)
    console.log(req.body)
    await Product.findByIdAndUpdate(req.query.OE_REF,req.body )
    // res.send('Item Updated!');
    .exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({
            message: "Product Updated",
            data
        });
    })
}