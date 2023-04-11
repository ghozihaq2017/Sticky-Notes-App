import React from "react";
import { Link } from "react-router-dom";

//component
import { FaStickyNote, FaArchive } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <FaStickyNote /> Sticky Notes App
        </Link>
      </h1>
      <h3>
        <Link to="/archives">
          <FaArchive /> Archive
        </Link>
      </h3>
    </header>
  );
}

export default Header;
