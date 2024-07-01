const express = require('express')
const controllers = require('../controllers/insertData.controllers')
const routes = express.Router()
routes.route('/insert').post(controllers.Insert)
module.exports=routes