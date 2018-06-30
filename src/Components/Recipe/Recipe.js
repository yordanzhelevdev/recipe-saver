import React from "react";

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
    const { recipeName, ingredients, directions, dishImg } = this.props.recipe;
    const bg = {
      background: `url(${dishImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "center"
    };
    const index = this.props.index;

    return (
      <div>
        <div className="recipeBody" style={bg} />
        <div className="recipeFooter">
          <p>{recipeName}</p>
        </div>
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
    );
  }
}

export default Recipe;
