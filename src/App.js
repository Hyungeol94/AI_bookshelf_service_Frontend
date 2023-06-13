import React from "react";
import Home from "./routes/Home";
import UserBookShelf from "./routes/UserBookShelf";
import Login from "./routes/Login";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/bookshelf" Component={UserBookShelf} />
        <Route path="/login" Component={Login} />
        <Route path="/search" Component={Search} />
        <Route path="/upload" Component={Upload} />
      </Routes>
    </Router>
  );
};
