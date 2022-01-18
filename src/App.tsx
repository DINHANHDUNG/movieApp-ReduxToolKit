import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import DetailMovie from "./component/movie/detail/DetailMovie";
import PageNoteFound from "./component/page_not_found/PageNoteFound";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="movie/:imdbID" element={<DetailMovie />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
