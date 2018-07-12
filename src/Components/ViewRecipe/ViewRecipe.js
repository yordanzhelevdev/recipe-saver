import React from "react";
import "./style.css";

class ViewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    const { recipe } = this.props.location.state;
    this.setState({ recipe: recipe });
  }

  render() {
    console.log(this.recipe);
    return (
      <div>
        <h1>{this.state.recipe.recipeName}</h1>
        <img src={this.state.recipe.dishImg} alt="Dish" />
        <ul>
          {this.state.recipe &&
            this.state.recipe.ingredients &&
            this.state.recipe.ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
        </ul>
        <ul>
          {this.state.recipe &&
            this.state.recipe.directions &&
            this.state.recipe.directions.map(direction => <li>{direction}</li>)}
        </ul>
      </div>
    );
  }
}

export default ViewRecipe;
