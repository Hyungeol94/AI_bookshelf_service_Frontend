import React from "react";
import Home from "./routes/Home";
import UserBookShelf from "./routes/UserBookShelf";
// import UserStatistics from "./routes/UserStatistics";
import Login from "./routes/Login";
import Search from "./pages/Search";
import Stats from "./pages/UserStatistics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Signup from "./routes/Signup"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/bookshelf" Component={UserBookShelf} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/search" Component={Search} />
        <Route path="/stats" Component={Stats} />
        {/* <Route path="/UserStatistics" Component={UserStatistics}/> */}
      </Routes>
    </Router>
  );
};
