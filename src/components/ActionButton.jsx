import React from "react";
import PropTypes from "prop-types";

//component
import { FiTrash2, FiFolder } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

//data
import { getNote } from "../utils/local-data";

function ActionButton({ id, onDelete, onArchive, onUnarchive }) {
  const note = getNote(id);
  return (
    <div className="action-button">
      {!note.archived ? (
        <button
          type="button"
          title="Arsipkan Catatan"
          onClick={() => {
            onArchive(id);
          }}
        >
          <FiFolder /> Archive
        </button>
      ) : (
        <button
          type="button"
          title="Aktifkan Catatan"
          onClick={() => {
            onUnarchive(id);
          }}
        >
          <FaArrowUp /> Active
        </button>
      )}

      <button
        type="button"
        title="Hapus"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FiTrash2 /> Delete
      </button>
    </div>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default ActionButton;
