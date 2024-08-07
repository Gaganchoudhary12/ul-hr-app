import express from 'express'
import { getUserRating } from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.get('/rating', getUserRating);

export default userRouter