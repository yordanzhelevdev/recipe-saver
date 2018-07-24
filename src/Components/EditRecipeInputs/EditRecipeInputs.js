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
  }

  editIngredietsAndDirections(e) {
    const index = this.props.index;
    const recipe = this.props.recipes[index];

    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value.split("\n")
    };

    this.props.updateRecipe(index, updatedRecipe);
  }

  render() {
    const currentUser = this.props.currentUser;
    const recipe = this.props.recipes[currentUser][this.props.index];
    return (
      <div>
        <form name="editRecipeForm">
          <div className="inputsContainer">
            <div className="recipeInputs">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                id="recipeName"
                value={recipe.recipeName}
                name="recipeName"
                type="text"
                onChange={this.handleEdit}
              />
              <label htmlFor="dishImg">Recipe Photo</label>
              <input
                id="dishImg"
                onChange={this.handleEdit}
                value={recipe.dishImg}
                type="text"
                name="dishImg"
              />
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                onChange={this.editIngredietsAndDirections}
                value={recipe.ingredients.join("\n")}
                name="ingredients"
                placeholder="Put each ingredient on its own line"
              />
              <label htmlFor="directions">Directions</label>
              <textarea
                id="directions"
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
