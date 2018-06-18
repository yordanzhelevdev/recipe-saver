import React from "react";
import "./style.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  createRecipe(e) {
    e.preventDefault();
    const ingredients = this.ingredients.value.split(/\n/);
    const directions = this.directions.value.split(/\n/);
    const recipe = {
      recipeName: this.recipeName.value,
      ingredients: ingredients,
      directions: directions,
      dishImg: this.dishImg.value
    };
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
    this.toggle();
  }

  render() {
    const modal = this.state.isOpen ? (
      <div className="modal">
        <form
          name="recipeForm"
          ref={input => (this.recipeForm = input)}
          onSubmit={this.createRecipe}
        >
          <div className="inputsContainer">
            <div className="recipeInputs">
              <label>Recipe Name</label>
              <input
                name="recipeName"
                type="text"
                ref={input => (this.recipeName = input)}
              />
              <label>Recipe Photo</label>
              <input
                type="text"
                name="dishImg"
                ref={input => (this.dishImg = input)}
              />
              <label>Ingredients</label>
              <textarea
                name="ingredients"
                placeholder="Put each ingredient on its own line"
                ref={input => (this.ingredients = input)}
              />
              <label>Directions</label>
              <textarea
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
    ) : (
      ""
    );
    return (
      <div>
        <button onClick={this.toggle}>Recipe</button>
        {modal}
      </div>
    );
  }
}

export default Modal;
