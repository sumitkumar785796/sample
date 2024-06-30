const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
app.get('/',async(req,res)=>{
    try {
        res.status(200).send('Backend server is now started...')
    } catch (error) {
        res.status(500).json({message:'Internal Server Error',data:error})
    }
})
app.listen(
    PORT,
    ()=>{
        console.log(`Server is now started ${PORT}`)
    }
)