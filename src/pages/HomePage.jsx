import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

//component
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import AddButton from "../components/AddButton";

//fuction
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
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
        notes: getActiveNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
      <section className="homepage">
        <h2>Active Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList
          notes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <AddButton />
      </section>
    );
  }
}

HomePage.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
