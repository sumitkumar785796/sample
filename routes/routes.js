const express = require('express')
const controllers = require('../controllers/insertData.controllers')
const routes = express.Router()
routes.route('/data')
    .post(controllers.Insert)
    .get(controllers.Views)
module.exports = routes