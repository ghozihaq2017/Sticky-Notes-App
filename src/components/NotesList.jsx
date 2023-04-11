import React from "react";
import PropTypes from "prop-types";

//Component
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, onUnarchive }) {
  if (!notes.length) {
    return <p>Tidak ada catatan!</p>;
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          {...note}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NotesList;
