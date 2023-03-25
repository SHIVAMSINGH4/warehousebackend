const { query } = require("express");
const Product_ggn_001 = require("../models/product_GGN_001.model")



exports.getAllProduct = (req, res) => {

    Product_ggn_001.find()
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
    Product_ggn_001.find({
        $or:
            [
                { OE_REF: req.query.OE_REF },
                { ITEMS_REF: req.query.ITEMS_REF }

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
    Product_ggn_001.find({ OE_REF: req.body.OE_REF })
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
            else {
                const pro = new Product_ggn_001(req.body)
                pro.save((err) => {
                    if (err) {
                        res.status(500).send({ error: err })
                    }
                    res.status(200).send({
                        message: "Product Added"
                    });

                })
            }


        })



}

exports.updateProductQuantity = async (req, res) => {

    console.log(req.body)
    await Product_ggn_001.findOneAndUpdate(
        { OE_REF: req.body.OE_REF, ITEMS_REF: req.body.ITEMS_REF },
        {
            $set: {
                SALES: req.body.QUANTITY
            }
        }
    )
    res.send('Item Updated!');


}


exports.updateFullProduct = async (req, res) => {
    try {
        console.log(req.body)
        await Product_ggn_001.findOneAndReplace(
            { ITEMS_REF: req.body.ITEMS_REF }, req.body)
            .then((err, data) => {
                if (err) {
                    console.log(err)
                    res.status(500).send({ error: err })
                }
                res.status(200).send({
                    data
                });
            })
    }
    catch (e) {
        console.log(e)
    }


}



