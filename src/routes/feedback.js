import express from 'express'
import { getFeedbackQuestion, submitFeedback } from '../controllers/feedback.controller.js'

const feedbackRouter = express.Router();

feedbackRouter.post('/', submitFeedback);
feedbackRouter.get('/question', getFeedbackQuestion);

export default feedbackRouter