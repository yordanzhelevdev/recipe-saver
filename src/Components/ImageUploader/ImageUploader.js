import React from 'react';
import './style.css';



class ImageUploader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			img: ''
		};
		this.onPhotoUpload = this.onPhotoUpload.bind(this);
	}

	onPhotoUpload(){
		const imageContainer = document.querySelector('.imageContainer');
		const file = document.querySelector('#imageUpload').files[0];
		const label = document.querySelector('.imageContainer label');

		const reader = new FileReader();

		 reader.addEventListener('load', () => {
		 		imageContainer.style.background = `url(${reader.result})`;
		 		imageContainer.style.backgroundSize = 'cover';
		 		imageContainer.style.backgroundRepeat = 'no-repeat';
		 		label.style.display = 'none';
		 });

		 if(file){
		 		reader.readAsDataURL(file);
		 }

	}

	render() {
		return (
			<div className="imageContainer">
				<label htmlFor="imageUpload" className="fas fa-upload"></label>
				<input id="imageUpload" type="file" onChange={this.onPhotoUpload} />
			</div>
		)
	}
}

export default ImageUploader;