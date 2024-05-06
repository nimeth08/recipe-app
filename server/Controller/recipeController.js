const RecipeBook = require("../Model/RecipeBook");

const addRecipe = async (req, res) => {
  const { name, ingredients, cookingTime, instructions } = req.body;

  const recipe = new RecipeBook({
    name,
    ingredients,
    cookingTime,
    instructions,
  });
  try {
    await recipe.save();
    res.status(201).json({
      status: "Success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipes = await RecipeBook.find({});
    res.status(200).json({
      status: "Success",
      data: {
        recipes,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const updateRecipe = await RecipeBook.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "Success",
      data: {
        updateRecipe,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const deleteRecipe = async (req, res) => {
  await RecipeBook.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      status: "Success",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

module.exports = { addRecipe, getRecipe, updateRecipe, deleteRecipe };
