import React from "react";
import Recipe from "./Recipe/Recipe";
import Modal from "./Modal/Modal";
import CreateRecipeInputs from "./CreateRecipeInputs/CreateRecipeInputs";
import EditRecipeInputs from "./EditRecipeInputs/EditRecipeInputs";
import sampleData from "../sample-data";
import "./global.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {},
      isEdit: false,
      isOpen: false,
      editableRecipe: {}
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeTheModal = this.closeTheModal.bind(this);
  }

  //Right before the component is rendered
  componentWillMount() {
    this.loadSampleData();
  }

  loadSampleData() {
    this.setState({
      recipes: sampleData
    });
  }

  addRecipe(recipe) {
    const recipes = { ...this.state.recipes };
    const timeStamp = Date.now();
    recipes[`recipe-${timeStamp}`] = recipe;

    this.setState({ recipes, isOpen: false });
  }

  deleteRecipe(index) {
    const recipes = { ...this.state.recipes };
    delete recipes[index];
    this.setState({ recipes: recipes });
  }

  editRecipe(index) {
    this.setState({
      isOpen: true,
      isEdit: true,
      editableRecipe: index
    });
  }

  updateRecipe(index, updatedRecipe) {
    const recipes = { ...this.state.recipes };
    recipes[index] = updatedRecipe;
    this.setState({ recipes });
  }

  toggleModal() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isEdit: false
    }));
  }

  closeTheModal() {
    this.setState({
      isOpen: false,
      isEdit: false
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen} closeTheModal={this.closeTheModal}>
          {this.state.isOpen && this.state.isEdit ? (
            <EditRecipeInputs
              recipes={this.state.recipes}
              index={this.state.editableRecipe}
              updateRecipe={this.updateRecipe}
            />
          ) : (
            <CreateRecipeInputs addRecipe={this.addRecipe} />
          )}
        </Modal>
        <div className="recipeContainer">
          {Object.keys(this.state.recipes).map(key => {
            return (
              <Recipe
                key={key}
                index={key}
                recipe={this.state.recipes[key]}
                deleteRecipe={this.deleteRecipe}
                editRecipe={this.editRecipe}
              />
            );
          })}
        </div>
        <button className="btn-addRecipe" onClick={this.toggleModal}>
          Add Recipe
        </button>
      </div>
    );
  }
}

export default App;
