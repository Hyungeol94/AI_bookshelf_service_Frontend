import React from "react";
import Home from "./routes/Home";
import UserBookShelf from "./routes/UserBookShelf";
import Login from "./pages/Login";
import Search from "./pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import auth from "./hooks/auth";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<UserBookShelf />} />
        <Route path="/login" element={auth(Login, false)} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};
