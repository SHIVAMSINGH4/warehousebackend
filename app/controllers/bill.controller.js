const Bill = require("../models/bill.model")
const Customer = require("../models/customer.model")
exports.getBill = (req,res) => {
    Bill.find({},{"__v": 0,"_id":0})

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


exports.addBill = (req,res)=>{
    Customer.find({name:req.body.phoneno})
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