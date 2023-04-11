import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h2>Halaman yang anda kunjungi tidak tersedia.</h2>
      <h4>
        <Link to="/">Go to Homepage</Link>
      </h4>
    </div>
  );
}

export default NotFoundPage;
