const comingSoonCtrl  = {}
const ComingSoon = require('../models/comingSoon');

comingSoonCtrl.getComingSoons = async (req,res) =>{
    const comingSoon = await ComingSoon.find();
    res.json(comingSoon);
}

comingSoonCtrl.createComingSoon = async (req,res) =>{
    const newComingSoon = new ComingSoon(req.body);
    await newComingSoon.save();
    res.send({message:'Coming soon created'})
}

comingSoonCtrl.getComingSoon = async(req,res) =>{
    const  comingSoon = await ComingSoon.findOne({_id:req.params.id})
    res.send( comingSoon);
} 

comingSoonCtrl.editComingSoon = async(req,res) =>{
    await ComingSoon.findByIdAndUpdate(req.params.id,req.body);
    res.json({status:'Coming soon Updated'});
} 

comingSoonCtrl.deleteComingSoon = async(req,res) => {
    await ComingSoon.findByIdAndDelete(req.params.id);
    res.json({status:'Coming soon Deleted'});
}

module.exports = comingSoonCtrl ;