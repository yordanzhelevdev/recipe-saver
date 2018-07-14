import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.enableEditRecipe = this.enableEditRecipe.bind(this);
  }

  enableEditRecipe() {
    const index = this.props.index;
    this.props.editRecipe(index);
  }

  render() {
    const { recipeName, dishImg } = this.props.recipe;
    const index = this.props.index;

    return (
      <div className="recipeReview">
        <Link
          to={{
            pathname: `/view/${index}`,
            state: {
              recipe: this.props.recipe
            }
          }}
        >
          <div className="recipeBody">
            <img src={dishImg} className="recipeImage" alt={recipeName} />
            <p>{recipeName}</p>
          </div>
        </Link>
        <div className="recipeFooter">
          <div className="recipeButtons">
            <button
              className="btn-dlt"
              onClick={() => this.props.deleteRecipe(index)}
            >
              Delete
            </button>
            <button className="btn-edit" onClick={this.enableEditRecipe}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
