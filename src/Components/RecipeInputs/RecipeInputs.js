import React from 'react';
import './style.css';
import ImageUploader from '../ImageUploader/ImageUploader';

const RecipeInputs = ({}) => {
  return (
  	<div>
  	<form>
  	<div className="inputsContainer">
		  	<ImageUploader />
			    <div className="recipeInputs">
			      <label>Recipe Name</label>
							<input type="text" />
							<label>Cook Time</label>
							<input type="time" step="1" />
							<label>Ingredients</label>
							<textarea placeholder="Put each ingredient on its own line"></textarea>
							<label>Directions</label>
							<textarea placeholder="Put each step on its own line"></textarea>
			    </div>
				</div>
				 <div className="formBtns">
				   <input type="reset" />
				   <input type="submit" />
			   </div>
	    </form>
    </div>
  )
}

export default RecipeInputs;