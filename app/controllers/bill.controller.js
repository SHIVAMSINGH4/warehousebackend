const Bill = require("../models/bill.model")
const Customer = require("../models/customer.model")
const Product_mun_001 = require("../models/product_MUN_001.model")
const Product_ggn_001 = require("../models/product_GGN_001.model")
const Product_del_001 = require("../models/product_DEL_001.model")

exports.getBill = (req, res) => {
    Bill.find({Bill_no:req.query.bill}, { "__v": 0, "_id": 0 })

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
    // console.log(req.body)
    await Customer.find({ phoneNO: req.body.phoneNO })
        .exec(async (err, data) => {
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
                        ).exec(async(res1) => {
                            if (err) {
                                res.status(500).send({ error: res1 })
                            }
                            await apicall(req.body.PRODUCTS[0].BRANCH_CODE, req.body.PRODUCTS).then((d) => {
                                console.log(d)
                            })
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

                await Bill.find().exec( (err, data) => {
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
                    ).exec(async(res1) => {
                        if (err) {
                            res.status(500).send({ error: res1 })
                        }
                        await apicall(req.body.PRODUCTS[0].BRANCH_CODE, req.body.PRODUCTS).then((d) => {
                            console.log(d)
                        })
                        res.status(200).send({
                            message: "Bill Generated",
                            billno: data.length + 1,
                            res1
                        });
                    })



                })

                // request.post('http://localhost:8080/v1/api/auth/updateProduct/${req.body.PRODUCTS[0].LOCATION}', body:req.body.PRODUCTS)


            }

        })
}

function apicall(loc, bod_y) {
    return new Promise((resolve, reject) => {
        if (loc === "MUN001") {
            return bod_y.map((d) => {
                Product_mun_001.findOneAndUpdate(
                    { ITEMS_REF: d.ITEMS_REF },
                    { $set: { SALES: d.QUANTITY } },
                    { new: true }, (err, doc) => {
                        if (err) {
                            console.log("Something wrong when updating data!");
                        }

                        resolve(doc)
                    }
                )
            })
        }
        else if (loc === "GGN001") {
            return bod_y.map((d) => {
                Product_ggn_001.findOneAndUpdate(
                    { ITEMS_REF: d.ITEMS_REF },
                    { $set: { SALES: d.QUANTITY } },
                    { new: true }, (err, doc) => {
                        if (err) {
                            console.log("Something wrong when updating data!");
                        }

                        resolve(doc)
                    }
                )

            })

        }
        else {
            return bod_y.map((d) => {
                Product_del_001.findOneAndUpdate(
                    { ITEMS_REF: d.ITEMS_REF },
                    { $set: { SALES: d.QUANTITY } },
                    { new: true }, (err, doc) => {
                        if (err) {
                            console.log("Something wrong when updating data!");
                        }

                        resolve(doc)
                    }
                )
                
            })
        }
    })

}


exports.bill_by_customer = async (req, res) => {
    console.log(typeof(req.query.phone_no))
    Customer.find({"phoneNO": req.query.phone_no})
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
