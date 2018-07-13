import React from "react";
import Recipe from "./Recipe/Recipe";
import Modal from "./Modal/Modal";
import CreateRecipeInputs from "./CreateRecipeInputs/CreateRecipeInputs";
import EditRecipeInputs from "./EditRecipeInputs/EditRecipeInputs";
import sampleData from "../sample-data";
import base from "../base";
import "./global.css";

import { Link } from "react-router-dom";

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
  componentWillMount() {}

  componentDidMount() {
    this.loadSampleData();
    // base.syncState('recipes', {
    //   context: this,
    //   state: 'recipes'
    // });
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
        <header className="site-header">
          <h1>
            <span role="img" aria-label="meat on bone">
              🍖
            </span>Recipe Saver<span role="img" aria-label="meat on bone">
              🍖
            </span>
          </h1>
        </header>
        <Modal
          isOpen={this.state.isOpen}
          closeTheModal={this.closeTheModal}
          modalType={this.state.isEdit ? "Edit Recipe" : "Add Recipe"}
        >
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
              <Link
                key={key}
                to={{
                  pathname: `/view/${key}`,
                  state: {
                    recipe: this.state.recipes[key]
                  }
                }}
              >
                <Recipe
                  key={key}
                  index={key}
                  recipe={this.state.recipes[key]}
                  deleteRecipe={this.deleteRecipe}
                  editRecipe={this.editRecipe}
                />
              </Link>
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
