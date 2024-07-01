const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    fname:{
        type:String,
    },
    age:{
        type:Number
    }
},{
    timestamps:true
})
const Data = new mongoose.model('DataInserted',DataSchema)
module.exports=Data