import express from 'express'
import { getUserRating,setUserRating } from '../controllers/manager.controller.js'

const managerRouter = express.Router();

managerRouter.post('/', getUserRating);
managerRouter.post('/rating', setUserRating);

export default managerRouter