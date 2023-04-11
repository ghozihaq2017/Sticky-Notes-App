import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPageWrapper from "./pages/DetailPage";
import HomePageWrapper from "./pages/HomePage";
import Header from "./components/Header";
import AddNotePage from "./pages/AddNotePage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
