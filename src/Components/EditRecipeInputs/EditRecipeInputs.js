import React from "react";

class EditRecipeInputs extends React.Component {
  constructor() {
    super();
    // this.createRecipe = this.createRecipe.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editIngredietsAndDirections = this.editIngredietsAndDirections.bind(
      this
    );
  }

  handleEdit(e) {
    const index = this.props.index;
    const recipe = this.props.recipes[index];

    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value
    };

    this.props.updateRecipe(index, updatedRecipe);
    console.log(updatedRecipe);
  }

  editIngredietsAndDirections(e) {
    const index = this.props.index;
    const recipe = this.props.recipes[index];

    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value.split("\n")
    };

    this.props.updateRecipe(index, updatedRecipe);
    console.log(updatedRecipe);
  }

  render() {
    const recipe = this.props.recipes[this.props.index];
    return (
      <div>
        <form name="editRecipeForm">
          <div className="inputsContainer">
            <div className="recipeInputs">
              <label>Recipe Name</label>
              <input
                value={recipe.recipeName}
                name="recipeName"
                type="text"
                onChange={this.handleEdit}
              />
              <label>Recipe Photo</label>
              <input
                onChange={this.handleEdit}
                value={recipe.dishImg}
                type="text"
                name="dishImg"
              />
              <label>Ingredients</label>
              <textarea
                onChange={this.editIngredietsAndDirections}
                value={recipe.ingredients.join("\n")}
                name="ingredients"
                placeholder="Put each ingredient on its own line"
              />
              <label>Directions</label>
              <textarea
                onChange={this.editIngredietsAndDirections}
                value={recipe.directions.join("\n")}
                name="directions"
                placeholder="Put each step on its own line"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditRecipeInputs;