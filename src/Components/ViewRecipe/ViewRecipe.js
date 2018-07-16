import React from "react";
import "./style.css";

class ViewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { recipe } = this.props.location.state;
    this.setState({ recipe: recipe });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack} className="btn-goBack">
          Go back
        </button>
        <div className="viewRecipe-container">
          <h1>{this.state.recipe.recipeName}</h1>
          <div className="recipePhoto-container">
            <img src={this.state.recipe.dishImg} alt="Dish" />
          </div>
          <div className="ingrAndDirection-container">
            <div className="ingredients-container">
              <h2>Ingredients</h2>
              <ul>
                {this.state.recipe &&
                  this.state.recipe.ingredients &&
                  this.state.recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div className="direction-container">
              <h2>Direction</h2>
              <ul>
                {this.state.recipe &&
                  this.state.recipe.directions &&
                  this.state.recipe.directions.map(direction => (
                    <li key={direction}>{direction}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRecipe;
