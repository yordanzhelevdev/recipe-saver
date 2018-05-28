import React from 'react';
import './style.css';
import ImageUploader from '../ImageUploader/ImageUploader';

class Modal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: true
		};
		this.toggle = this.toggle.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
		
	}

	onFieldChange(event){
		console.log(this);
		const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
	}

	render() {
		const modal = this.state.isOpen ? 
					(
						<div className='modal' >
							<form>
						  	<div className="inputsContainer">
								  	<ImageUploader />
									    <div className="recipeInputs">
									      <label>Recipe Name</label>
													<input name="recipeName" type="text" onChange={this.onFieldChange}/>
													<label>Cook Time</label>
													<input name="cookTime" type="time" step="1" onChange={this.onFieldChange} />
													<label>Ingredients</label>
													<textarea name="ingredients" placeholder="Put each ingredient on its own line"></textarea>
													<label>Directions</label>
													<textarea name="directions" placeholder="Put each step on its own line" onChange={this.onFieldChange}></textarea>
									    </div>
										</div>
										 <div className="formBtns">
										   <input type="reset" />
										   <input type="submit" />
									   </div>
						    </form>
						</div>
					)
					:
					'';
		return(
			<div>
				<button onClick={this.toggle}>Recipe</button>
				{modal}
			</div>
		)
	}
}

export default Modal;