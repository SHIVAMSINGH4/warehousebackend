const Bill = require("../models/bill.model")
const Customer = require("../models/customer.model")
const request = require('request')
const Product_mun_001 = require("../models/product_DEL_001.model")
exports.getBill = (req, res) => {
    Bill.find({}, { "__v": 0, "_id": 0 })

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


exports.addBill = async (req, res) => {
    console.log(req.body)
    await Customer.find({ phoneNO: req.body.phoneNO })
        .exec((err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            else if (data.length < 1) {
                const customer = new Customer({
                    phoneNO: req.body.phoneNO,
                    billNo: []

                });
                customer.save((err) => {
                    if (err) {
                        res.status(500).send({ error: err })
                    }
                    Bill.find().exec((err, data) => {
                        const bill = new Bill({
                            "PRODUCTS": req.body.PRODUCTS,
                            "Bill_no": data.length + 1
                        });
                        bill.save()
                        Customer.findOneAndUpdate(
                            { "phoneNO": req.body.phoneNO },
                            {
                                $push: {
                                    billNo: data.length + 1
                                }
                            }
                        ).exec((res1) => {
                            if (err) {
                                res.status(500).send({ error: res1 })
                            }
                            res.status(200).send({
                                message: "Bill Generated",
                                billno: data.length + 1,
                                res1
                            });
                        })



                    })

                })
            }
            else {

                Bill.find().exec((err, data) => {
                    const bill = new Bill({
                        "PRODUCTS": req.body.PRODUCTS,
                        "Bill_no": data.length + 1
                    });
                    bill.save()
                    Customer.findOneAndUpdate(
                        { "phoneNO": req.body.phoneNO },
                        {
                            $push: {
                                billNo: data.length + 1
                            }
                        }
                    ).exec((res1) => {
                        if (err) {
                            res.status(500).send({ error: res1 })
                        }
                        res.status(200).send({
                            message: "Bill Generated",
                            billno: data.length + 1,
                            res1
                        });
                    })



                })

                // request.post('http://localhost:8080/v1/api/auth/updateProduct/${req.body.PRODUCTS[0].LOCATION}', body:req.body.PRODUCTS)
                apicall(req.body.PRODUCTS[0].LOCATION, req.body.PRODUCTS)

            }

        })
}

function apicall(loc, bod_y) {
    if (loc === "MUN001") {
        // console.log(bod_y)
        bod_y.map((d) => {
            console.log(d)
            Product_mun_001.findOneAndUpdate(
                { ITEMS_REF: "1" },
                {
                    $set: {
                        QTY: 10
                    }
                }
            )
            console.log()
        })

    }
}