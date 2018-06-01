import React from "react";
import "./style.css";

function RecipesRender(props) {
  return (
    <div className="recipeContainer">
      {props.recipes.map((recipe, i) => {
        const bg = {
          background: `url(${recipe.dishImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center"
        };

        return (
          <div key={`${recipe.recipeName}_${i}`}>
            <div className="recipeBody" style={bg} />
            <div className="recipeFooter">
              <p>{recipe.recipeName}</p>
            </div>
            <div className="recipeButtons">
              <button
                className="btn-dlt"
                onClick={e => {
                  props.deleteRecipe(e, i);
                }}
              >
                Delete
              </button>
              <button className="btn-edit">Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipesRender;
