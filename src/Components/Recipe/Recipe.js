import React from "react";

class Recipe extends React.Component {
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
          <button className="btn-edit">Edit</button>
        </div>
      </div>
    );
  }
}

export default Recipe;

// {Object.keys(props.recipes).map((recipe, i) => {
//      console.log(recipe.dishImg);
//      const bg = {
//        background: `url(${recipe.dishImg})`,
//        backgroundRepeat: "no-repeat",
//        backgroundSize: "100%",
//        backgroundPosition: "center"
//      };

//      return (
//        <div key={`${recipe.recipeName}_${i}`}>
//          <div className="recipeBody" style={bg} />
//          <div className="recipeFooter">
//            <p>{recipe.recipeName}</p>
//          </div>
//          <div className="recipeButtons">
//            <button
//              className="btn-dlt"
//              onClick={e => {
//                props.deleteRecipe(e, i);
//              }}
//            >
//              Delete
//            </button>
//            <button
//              className="btn-edit"
//              onClick={(e, index) => {
//                props.onEdit(e, i);
//              }}
//            >
//              Edit
//            </button>
//          </div>
//        </div>
//      );
//    })}
