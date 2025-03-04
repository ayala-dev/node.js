const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    id:int
});

module.exports = mongoose.model('User', userSchema);