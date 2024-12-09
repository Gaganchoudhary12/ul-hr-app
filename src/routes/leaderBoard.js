import express from 'express'
import { getLeaders } from '../controllers/leaderBoard.controller.js';

const leaderBoardRouter = express.Router();

leaderBoardRouter.get('/', getLeaders);

export default leaderBoardRouter