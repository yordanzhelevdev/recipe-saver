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
		const modal = this.state.isOpen ? 
					(<div className='modal' >
						<h1>{this.state.isOpen ? 'Opened' : 'Closed'}</h1>
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