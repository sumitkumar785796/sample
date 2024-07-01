const Data = require('../schema/Data.schema')
exports.Insert = async (req, res) => {
    try {
        const { fname, age } = req.body
        const sendData = await Data.create({
            fname,
            age
        })
        return res.status(201).json({ message: 'Inserted data successfully', data: sendData })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', data: error })
    }
}
exports.Views = async (req,res)=>{
    try {
        const view = await Data.find()
        res.status(200).json({message:'View All Data',data:view})
    } catch (error) {
        res.status(500).json({message:'Internal Server Error',data:error})
        
    }
}