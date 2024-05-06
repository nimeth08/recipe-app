const mongoose = require("mongoose");

const RecipeBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const RecipeBook = mongoose.model("RecipeBook", RecipeBookSchema);

module.exports = RecipeBook;
