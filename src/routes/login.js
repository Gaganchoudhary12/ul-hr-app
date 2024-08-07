const express = require('express');
const { login } =  require("../controllers/login.controller.js")

const loginRouter = express.Router();

loginRouter.post('/', login);
loginRouter.post('/login-via-otp', login);

module.exports = loginRouter;
