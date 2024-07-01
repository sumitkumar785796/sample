require('dotenv').config()
const express = require('express')
const connDB = require('./config/connection')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',routes)
app.get('/', async (req, res) => {
    try {
        res.status(200).send('Backend server is now started...')
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', data: error })
    }
})
const startServer = async () => {
    try {
        connDB()
        app.listen(
            PORT,
            () => {
                console.log(`Server is now started ${PORT}`)
            }
        )
    } catch (error) {
        console.log(error)
    }
}
startServer()
