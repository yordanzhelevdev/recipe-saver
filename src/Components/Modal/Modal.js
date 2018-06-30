import React from "react";
import "./style.css";

class Modal extends React.Component {
  render() {
    const isOpen = this.props.isOpen;

    return (
      <div className={isOpen ? "isOpen" : ""}>
        {isOpen && (
          <div className="modal">
            <button
              className="close"
              onClick={() => this.props.closeTheModal()}
            >
              Close
            </button>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
