const mongoose = require('mongoose')
const connDB = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb connection is successfully connected...')
    } catch (error) {
        console.log(error)
    }
}
module.exports=connDB