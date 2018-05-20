import React from 'react';
import './style.css';


function RecipesRender (props) {
	return (
		<div className="recipeContainer">
			{props.recipes.map(recipe => {
				const bg = {
					background: `url(${recipe.dishImg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}

				return (
					<div>
						<div className="recipeBody" style={bg}></div>
						<div className="recipeFooter">
							<p>{recipe.recipeName}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default RecipesRender;