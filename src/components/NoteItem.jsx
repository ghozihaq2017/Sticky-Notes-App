import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//data
import { showFormattedDate } from "../utils";

//component
import ActionButton from "./ActionButton";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
      <ActionButton
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NoteItem;
