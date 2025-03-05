const express = require('express');
const router = express.Router();

const {addRecipe,getAllRecipes} = require('../controllers/recipeController');

router.post('/', addRecipe);
router.get('/',getAllRecipes);
// router.get('/:id',getByIdRecipes);
// router.delete('/:id',deletRecipe);

module.exports = router;