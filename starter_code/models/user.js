const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema(
    {
        username: String,
        password: String
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userModel);

module.exports = User;