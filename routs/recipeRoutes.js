const express = require('express');
const {createRecipe,deleteRecipe,updateRecipe} = require('../controllers/recipeController');

const router = express.Router();
const User = require("../models/users");
router.post('/', createRecipe);
router.delete('/:id', deleteRecipe);
router.put('/:id', updateRecipe);

module.exports = router;