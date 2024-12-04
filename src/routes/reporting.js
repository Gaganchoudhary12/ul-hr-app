import express from 'express'
import { reporting } from '../controllers/reporting.controller.js';

const reportingRouter = express.Router();

reportingRouter.post('/', reporting);

export default reportingRouter