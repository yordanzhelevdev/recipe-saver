import React from 'react';
import './style.css';


class Modal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
		
	}

	render() {
		return(
			<div>
				<button onClick={this.toggle}>Recipe</button>
				<div className="modal">
					<h1>{this.state.isOpen ? 'Opened' : 'Closed'}</h1>
				</div>
			</div>
		)
	}
}

export default Modal;