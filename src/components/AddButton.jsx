import React from "react";
import { Link } from "react-router-dom";

//component
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div className="homepage__action">
      <Link to="/notes/new">
        <button className="action" type="button" title="Tambah">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
