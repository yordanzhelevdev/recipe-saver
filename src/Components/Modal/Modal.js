import React from "react";
import "./style.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.toggle = this.toggle.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  onFormSubmit(event) {
    this.props.onSubmit(event);
  }

  handlePhotoUpload(event) {
    const imageContainer = document.querySelector(".imageContainer");
    const label = document.querySelector(".imageContainer label");
    const file = URL.createObjectURL(event.target.files[0]);

    imageContainer.style.backgroundImage = `url(${file})`;
    imageContainer.style.backgroundSize = "100%";
    imageContainer.style.backgroundRepeat = "no-repeat";
    imageContainer.style.backgroundPosition = "center";
    label.style.display = "none";

    this.props.onPhotoUpload(event, file);
  }

  render() {
    const modal = this.state.isOpen ? (
      <div className="modal">
        <form onSubmit={this.onFormSubmit}>
          <div className="inputsContainer">
            <div>
              <span>Recipe Photo</span>
              <div className="imageContainer">
                <label htmlFor="imageUpload" className="fas fa-upload" />
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={this.handlePhotoUpload}
                />
              </div>
            </div>
            <div className="recipeInputs">
              <label>Recipe Name</label>
              <input
                name="recipeName"
                type="text"
                onChange={this.onFieldChange}
              />
              <label>Cook Time</label>
              <input
                name="cookTime"
                type="time"
                step="1"
                onChange={this.onFieldChange}
              />
              <label>Ingredients</label>
              <textarea
                name="ingredients"
                placeholder="Put each ingredient on its own line"
                onChange={this.onFieldChange}
              />
              <label>Directions</label>
              <textarea
                name="directions"
                placeholder="Put each step on its own line"
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="formBtns">
            <input type="reset" />
            <input type="submit" />
          </div>
        </form>
      </div>
    ) : (
      ""
    );
    return (
      <div>
        <button onClick={this.toggle}>Recipe</button>
        {modal}
      </div>
    );
  }
}

export default Modal;
