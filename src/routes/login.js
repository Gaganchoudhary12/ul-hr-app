import express from 'express'
import  { login } from '../controllers/login.controller.js'

const loginRouter = express.Router();

loginRouter.post('/', login);
loginRouter.post('/login-via-otp', login);

export default loginRouter