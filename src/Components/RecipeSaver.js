import React from "react";
import RecipesRender from "./RecipesRender/RecipesRender";
import Modal from "./Modal/Modal";
import "./global.css";

class RecipeSaver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      ingredients: "",
      directions: "",
      dishImg: null,
      recipes: [
        {
          recipeName: "Ham And Cheese Breakfast Pockets",
          ingredients: ["Prod 1", "Prod 2", "Prod 3"],
          directions: [
            "Frist Direction",
            "Second Direction",
            "Third Direction"
          ],
          dishImg: "https://loremflickr.com/320/240?random=1"
        },
        {
          recipeName:
            "3 Meals, 1 Snack, $10 (7-Day Make-Ahead Meal Plan Day 5)",
          ingredients: ["Prod 1", "Prod 2", "Prod 3"],
          directions: [
            "Frist Direction",
            "Second Direction",
            "Third Direction"
          ],
          dishImg: "https://loremflickr.com/320/240?random=2"
        },
        {
          recipeName: "Ramadan Dishes for Suhoor & Iftar",
          ingredients: ["Prod 1", "Prod 2", "Prod 3"],
          directions: [
            "Frist Direction",
            "Second Direction",
            "Third Direction"
          ],
          dishImg: "https://loremflickr.com/320/240?random=3"
        },
        {
          recipeName: "3-Ingredient Cookies ‘n’ Cream Ice Cream",
          ingredients: ["Prod 1", "Prod 2", "Prod 3"],
          directions: [
            "Frist Direction",
            "Second Direction",
            "Third Direction"
          ],
          dishImg: "https://loremflickr.com/320/240?random=4"
        },
        {
          recipeName: "Cheesy Eggplant Roll-Ups",
          ingredients: ["Prod 1", "Prod 2", "Prod 3"],
          directions: [
            "Frist Direction",
            "Second Direction",
            "Third Direction"
          ],
          dishImg: "https://loremflickr.com/320/240?random=5"
        }
      ]
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPhotoUpload = this.onPhotoUpload.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  onChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  onPhotoUpload(field, value) {
    this.setState({
      dishImg: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const ingredients = this.state.ingredients.split(/\n/);
    const directions = this.state.directions.split(/\n/);
    const recipeTemplate = {
      recipeName: this.state.recipeName,
      ingredients: ingredients,
      directions: directions,
      dishImg: this.state.dishImg
    };

    const recipes = this.state.recipes.slice();
    recipes.push(recipeTemplate);

    this.setState({
      recipeName: "",
      ingredients: "",
      directions: "",
      dishImg: null,
      recipes: recipes
    });
  }

  deleteRecipe(e, i) {
    const recipes = this.state.recipes.slice();
    recipes.splice(i, 1);
    this.setState({ recipes: recipes });
  }

  editRecipe(e, index) {
    console.log(this.state.recipes[index]);
  }

  render() {
    return (
      <div>
        <Modal
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onPhotoUpload={this.onPhotoUpload}
          recipes={this.state.recipes}
        />
        <RecipesRender
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
          onEdit={this.editRecipe}
        />
      </div>
    );
  }
}

export default RecipeSaver;
