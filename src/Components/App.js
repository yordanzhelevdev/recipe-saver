import React from "react";
import Recipe from "./Recipe/Recipe";
import Modal from "./Modal/Modal";
import sampleData from "../sample-data";
import "./global.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {}
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
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

  // onChange(field, value) {
  //   this.setState({
  //     [field]: value
  //   });
  // }

  addRecipe(recipe) {
    const recipes = { ...this.state.recipes };
    const timeStamp = Date.now();
    recipes[`recipe-${timeStamp}`] = recipe;

    this.setState({ recipes });
  }

  deleteRecipe(index) {
    const recipes = { ...this.state.recipes };
    delete recipes[index];
    this.setState({ recipes: recipes });
  }

  render() {
    return (
      <div>
        <Modal
          addRecipe={this.addRecipe}
          onPhotoUpload={this.onPhotoUpload}
          recipes={this.state.recipes}
        />
        <div className="recipeContainer">
          {Object.keys(this.state.recipes).map(key => {
            console.log(this.state.recipes[key]);
            return (
              <Recipe
                key={key}
                index={key}
                recipe={this.state.recipes[key]}
                deleteRecipe={this.deleteRecipe}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
