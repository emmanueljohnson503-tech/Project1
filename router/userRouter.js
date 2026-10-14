const express = require('express');

const router = express.Router();

const {getUsers, createUser} = require('../controller/user')
const logger = require('../middleware/logger.js')
const loggs = require('../middleware/loggs.js')

router.get('/allUsers', logger, getUsers)

router.post('/createUser', loggs, createUser )
module.exports = router
