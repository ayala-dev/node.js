const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    category: String,
    instructions:[String]
});

module.exports = mongoose.model('Recipe', recipeSchema);