import express from 'express'
import { getUserRating,setUserRating } from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.post('/', getUserRating);
userRouter.post('/rating', setUserRating);

export default userRouter