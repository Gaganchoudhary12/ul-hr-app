import express from 'express'
import { getUserRating,setUserRating } from '../controllers/manager.controller.js'

const onboardingManagerRouter = express.Router();

onboardingManagerRouter.post('/', getUserRating);
onboardingManagerRouter.post('/rating', setUserRating);

export default onboardingManagerRouter