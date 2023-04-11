import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

//components
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";

//function
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <div>
        <section className="archives-page">
          <h2>Catatan Arsip</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NotesList
            notes={notes}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          />
        </section>
      </div>
    );
  }
}

ArchivePage.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default ArchivePageWrapper;
