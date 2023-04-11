import React from "react";
import { useNavigate } from "react-router-dom";
import InputAddNote from "../components/InputAddNote";
import { addNote } from "../utils/local-data";

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <InputAddNote addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNotePage;
