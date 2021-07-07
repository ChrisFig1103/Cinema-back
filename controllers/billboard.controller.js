const billboardCtrl = {}
const Billboard = require('../models/billboard');

billboardCtrl.getBillboards = async (req,res) =>{
    const billboard = await Billboard.find();
    res.json(billboard);
}

billboardCtrl.createBillboard = async (req,res) =>{
    const newBillboard = new Billboard(req.body);
    await newBillboard.save();
    res.send({message:'Billboard created'})
}

billboardCtrl.getBillboard = async(req,res) =>{
    const  billboard = await Billboard.findOne({_id:req.params.id})
    res.send( billboard);
} 

billboardCtrl.editBillboard = async(req,res) =>{
    await Billboard.findByIdAndUpdate(req.params.id,req.body);
    res.json({status:'Billboard Updated'});
} 

billboardCtrl.deleteBillboard = async(req,res) => {
    await Billboard.findByIdAndDelete(req.params.id);
    res.json({status:'Billboard Deleted'});
}

module.exports = billboardCtrl ;