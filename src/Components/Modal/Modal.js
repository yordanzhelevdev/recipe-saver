import React from 'react';
import './style.css';
import ImageUploader from '../ImageUploader/ImageUploader';
import RecipeInputs from '../RecipeInputs/RecipeInputs';

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
					(
						<div className='modal' >
							<RecipeInputs />
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