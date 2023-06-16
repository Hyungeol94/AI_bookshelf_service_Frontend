/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

// ourpage
import Home from "./routes/Home";
import First from "./routes/First";
import UserBookShelf from "./routes/UserBookShelf";
import Login from "./routes/Login";
import Upload from "./pages/Upload";
import Resultpage from "./routes/Result";
import Searchpage from "./routes/Search";
import SignUp from "./pages/SignUp";
import User from "./routes/User";
import Detail from "./pages/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* our page */}
        <Route path="/" Component={First} />
        <Route path="/home" Component={Home} />
        <Route path="/bookshelf" Component={UserBookShelf} />
        <Route path="/login" Component={Login} />
        <Route
          path="/blk-design-system-react"
          element={<Navigate to="/" replace />}
        />
        <Route path="/upload" Component={Upload} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/result" Component={Resultpage} />
        <Route path="/search" Component={Searchpage} />
        <Route path="/profile" Component={User} />
        <Route path="/detail" Component={Detail} />
        {/* <Route path="/detail/:id" element={<Detail Detail={Detail} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
