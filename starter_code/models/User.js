//call mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new schema
const userSchema = new Schema({
    email: String,
    password: String,
 
});

const UserLogin = mongoose.model('users', userSchema);

module.exports = UserLogin;

