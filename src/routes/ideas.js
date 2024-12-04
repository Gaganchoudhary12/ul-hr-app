import express from 'express'
import { handleIdeas } from '../controllers/ideas.controller.js';

const ideasRouter = express.Router();

ideasRouter.post('/', handleIdeas);

export default ideasRouter