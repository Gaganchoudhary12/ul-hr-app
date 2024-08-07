const express = require('express');
const { getUserRating } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/rating', getUserRating);

module.exports = userRouter;
