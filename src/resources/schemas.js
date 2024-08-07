const mongoose = require('mongoose')
const loginSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String
}, { versionKey: false }); 

module.exports = {loginSchema}