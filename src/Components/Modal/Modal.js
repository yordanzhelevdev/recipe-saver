import React from "react";
import "./style.css";

class Modal extends React.Component {
  render() {
    const isOpen = this.props.isOpen;

    return (
      <div className="modal" style={{ display: isOpen ? "block" : "" }}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={() => this.props.closeTheModal()}>
              &times;
            </span>
          </div>
          <div className="modal-body">{this.props.children}</div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

export default Modal;
