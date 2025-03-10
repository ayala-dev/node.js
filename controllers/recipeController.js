
const Recipe = require('../models/Recipe');

exports.addRecipe = async(req,res)=>{
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
}

exports.getAllRecipes = async (req, res) => {
    try {

      const Recipe = await Recipe.find();
      res.json(Recipe);
    } catch (error) {
      console.error('Failed to get users:', error);
      res.status(500).json({ message: 'Failed to get users' });
    }
  };

  exports.GetRecipeById = async (req, res) => {
    const { ResupeId } = req.params;
    console.log(ResupeId)
  
    try {
      const recipe = await Recipe.findOne({_id: ResupeId });
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      console.error('Failed to get user:', error);
      res.status(500).json({ message: 'Failed to get user' });
    }
  };
