const express = require("express");
const {
  addRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controller/recipeController");
const router = express.Router();

router.post("/add-recipe", addRecipe);
router.get("/get-recipe", getRecipe);
router.patch("/update-recipe/:id", updateRecipe);
router.delete("/delete-recipe/:id", deleteRecipe);

module.exports = router;
