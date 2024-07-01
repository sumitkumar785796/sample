require('dotenv').config()
const path = require('path')
const express = require('express')
const connDB = require('./config/connection')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes/routes')
const cors = require('cors')
app.use(cors())
// Serve static files to react
app.use(express.static(path.resolve(__dirname,"client","build")))
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
