import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//component
import { FaCheck, FaTimes } from "react-icons/fa";

function SaveNoteButton({ onSubmit }) {
  return (
    <div className="add-new-page__action">
      <button
        className="action"
        type="submit"
        title="Simpan"
        onClick={onSubmit}
      >
        <FaCheck />
      </button>
      <Link to="/">
        <button className="action" type="button" title="Cancel">
          <FaTimes />
        </button>
      </Link>
    </div>
  );
}

SaveNoteButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SaveNoteButton;
