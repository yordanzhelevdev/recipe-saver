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
	}

	toggle() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
		
	}

	render() {
		const modal = this.state.isOpen ? 
					(<div className='modal' >
						<ImageUploader />
						<label>Recipe Name</label>
						<input type="text" />
						<label>Cook Time</label>
						<input type="text" />
						<label>Ingredients</label>
						<textarea placeholder="Put each ingredient on its own line"></textarea>
						<label>Directions</label>
						<textarea placeholder="Put each step on its own line"></textarea>
					</div>)
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