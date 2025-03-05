const express = require('express');
const router = express.Router();

const {addRecipe} = require('../controllers/recipeController');

router.post('/', addRecipe);
router.get('/',getAllRecipes);
router.get('/:Id',getByIdRecipes);
router.delete('/:Id',deletRecipe);

module.exports = router;