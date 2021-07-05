const { Schema,model } = require('mongoose');

billboardSchema = new Schema({
    //required:true
    id:{type:Number},
    logo_url: {type:String},
    year: {type:String},
    classification: {type:String},
    duration: {type:String},
    genre: {type:String},
    description: {type:String},
    trailer_url: {type:String},
    director: {type:String},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('billboard',billboardSchema);
