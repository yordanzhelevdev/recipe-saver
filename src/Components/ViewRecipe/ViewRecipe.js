import React from "react";
import "./style.css";

class ViewRecipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { recipe } = this.props.location.state;
  }

  render() {
    console.log(this.recipe);
    return (
      <div>
        <h1 />
        <img src="" alt="" />
        <ul>
          <li>prod</li>
          <li>prod</li>
          <li>prod</li>
        </ul>
        <ul>
          <li>direction</li>
          <li>direction</li>
          <li>direction</li>
          <li>direction</li>
          <li>directio</li>
        </ul>
      </div>
    );
  }
}

export default ViewRecipe;
