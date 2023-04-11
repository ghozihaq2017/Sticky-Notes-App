import React, { Component } from "react";
import PropTypes from "prop-types";

//component
import SaveNoteButton from "./SaveNoteButton";

class InputAddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  onBody;

  render() {
    console.log(this.state);
    return (
      <div className="add-new-page__input">
        <input
          placeholder="Catatan Rahasia"
          className="add-new-page__input__title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Sebenarnya saya adalah..."
          onInput={this.onBodyInputHandler}
        ></div>
        <SaveNoteButton onSubmit={this.onSubmitEventHandler} />
      </div>
    );
  }
}

InputAddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default InputAddNote;
