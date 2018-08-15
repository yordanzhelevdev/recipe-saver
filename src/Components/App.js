import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Recipe from "./Recipe/Recipe";
import Modal from "./Modal/Modal";
import CreateRecipeInputs from "./CreateRecipeInputs/CreateRecipeInputs";
import EditRecipeInputs from "./EditRecipeInputs/EditRecipeInputs";
import sampleData from "../sample-data";
import { app, base } from "../base";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import "./global.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {},
      isEdit: false,
      isOpen: false,
      editableRecipe: {},
      authenticated: false,
      loading: true,
      currentUser: ""
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeTheModal = this.closeTheModal.bind(this);
    this.loadSampleData = this.loadSampleData.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onEscapePress);
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
          currentUser: user.uid
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
    base.syncState("recipes", {
      context: this,
      state: "recipes"
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  loadSampleData() {
    const currentUser = this.state.currentUser;
    this.setState({
      recipes: {
        [currentUser]: sampleData
      }
    });
  }

  addRecipe(recipe) {
    const recipes = { ...this.state.recipes };
    const timeStamp = Date.now();
    recipes[this.state.currentUser] = { [`recipe-${timeStamp}`]: recipe };
    // recipes[`recipe-${timeStamp}`] = recipe;
    this.setState({ recipes, isOpen: false });
  }

  deleteRecipe(index) {
    // 1. take a copy of state
    const recipes = { ...this.state.recipes };
    // 2. update the state
    recipes[this.state.currentUser][index] = null;
    // 3.  update state
    this.setState({ recipes });
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
    recipes[this.state.currentUser][index] = updatedRecipe;
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

  onEscapePress(e) {
    if (this.state.isOpen && e.key === "Escape") {
      this.closeTheModal();
    }
  }

  render() {
    const currentUser = this.state.currentUser;
    if (this.state.loading) {
      return <LoadingSpinner heading="Logging in" />;
    }
    return (
      <div className="wrapper-all">
        <div className="inner-all">
          <Header
            authenticated={this.state.authenticated}
            loadSampleData={this.loadSampleData}
          />
          <Modal
            isOpen={this.state.isOpen}
            closeTheModal={this.closeTheModal}
            modalType={this.state.isEdit ? "Edit Recipe" : "Add Recipe"}
          >
            {this.state.isOpen && this.state.isEdit ? (
              <EditRecipeInputs
                currentUser={this.state.currentUser}
                recipes={this.state.recipes}
                index={this.state.editableRecipe}
                updateRecipe={this.updateRecipe}
              />
            ) : (
              <CreateRecipeInputs addRecipe={this.addRecipe} />
            )}
          </Modal>
          <div className="recipeContainer">
            {this.state && this.state.recipes[currentUser]
              ? Object.keys(this.state.recipes[currentUser]).map(key => {
                  return (
                    <Recipe
                      key={key}
                      index={key}
                      recipe={this.state.recipes[currentUser][key]}
                      deleteRecipe={this.deleteRecipe}
                      editRecipe={this.editRecipe}
                    />
                  );
                })
              : ""}
          </div>
          {this.state.authenticated ? (
            <button className="btn-addRecipe" onClick={this.toggleModal}>
              Add Recipe
            </button>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
