const express = require('express');
const router = express.Router();

const {addRecipe,getAllRecipes,GetRecipeById} = require('../controllers/recipeController');

router.post('/', addRecipe);
router.get('/',getAllRecipes);
 router.get('/:id',GetRecipeById);
// router.delete('/:id',deletRecipe);

module.exports = router;