import express from 'express'
import { getBanners } from '../controllers/banner.controller.js';

const bannerRouter = express.Router();

bannerRouter.get('/', getBanners);

export default bannerRouter