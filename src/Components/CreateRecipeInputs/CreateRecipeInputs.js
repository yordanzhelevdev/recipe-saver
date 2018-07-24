import React from "react";
import "./style.css";

class CreateRecipeInputs extends React.Component {
  constructor() {
    super();
    this.createRecipe = this.createRecipe.bind(this);
  }

  createRecipe(e) {
    e.preventDefault();
    const ingredients = this.ingredients.value.split(/\n/);
    const directions = this.directions.value.split(/\n/);
    const recipe = {
      recipeName:
        this.recipeName.value !== "" ? this.recipeName.value : "Recipe",
      ingredients: ingredients,
      directions: directions,
      dishImg:
        this.dishImg.value !== ""
          ? this.dishImg.value
          : "https://i.imgur.com/WNehOUw.png"
    };
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
  }
  render() {
    return (
      <div>
        <form
          name="recipeForm"
          ref={input => (this.recipeForm = input)}
          onSubmit={this.createRecipe}
        >
          <div className="inputsContainer">
            <div className="recipeInputs">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                name="recipeName"
                type="text"
                id="recipeName"
                ref={input => (this.recipeName = input)}
              />
              <label htmlFor="dishImg">Recipe Photo</label>
              <input
                type="text"
                name="dishImg"
                id="dishImg"
                ref={input => (this.dishImg = input)}
              />
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Put each ingredient on its own line"
                ref={input => (this.ingredients = input)}
              />
              <label htmlFor="directions">Directions</label>
              <textarea
                id="directions"
                name="directions"
                placeholder="Put each step on its own line"
                ref={input => (this.directions = input)}
              />
            </div>
          </div>
          <div className="formBtns">
            <input type="submit" value="Save" />
            <input type="reset" value="Clear" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRecipeInputs;
