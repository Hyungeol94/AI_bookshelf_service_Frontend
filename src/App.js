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
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

// ourpage
import Home from "./routes/Home";
import First from "./routes/First";
import UserBookShelf from "./pages/UserBookShelf";
import auth from "./hooks/auth";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Resultpage from "./routes/Result";
import Searchpage from "./routes/Search";
import SignUp from "./pages/Signup";
import User from "./pages/ProfileEdit";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import FindPw from "./pages/Findpw";
import Findid from "./pages/Findid";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/About";
import Result from "./pages/Result";
// import Search from "./pages/Search";
// import "./styles/App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Stats from "./components/UserStatistics";
// import GetBookDetail from "./components/GetBookDetail";

/** Header를 강제적으로 가지는 페이지를 위해 감싸주는 함수형 컴포넌트 */
const HeaderWrapper = () => (
  <>
    <IndexNavbar />
    <Outlet />
  </>
);
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/blk-design-system-react"
          element={<Navigate to="/" replace />}
        />
        <Route path="/" element={<HeaderWrapper />}>
          <Route path="main" element={auth(Home, true)} />
          {/* <Route path="main" element={<Home/>} /> */}

          <Route path="bookshelf" element={auth(UserBookShelf, true)} />
          <Route path="login" element={auth(Login, false)} />
          <Route path="" element={auth(First, false)} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={auth(Searchpage, true)} />
          <Route path="profile" element={<User />} />
          <Route path="/EditProfile" element={<User />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/profile" element={auth(User, true)} />
        </Route>
        <Route path="/upload" element={<Upload />} />
        <Route path="/result" element={<Resultpage />} />
        {/* <Route path="/detail" element={<Detail />} /> */}

        {/* <Route path="search" element={<Searchpage />} /> */}

        {/* <Route path="/bookshelf/detail/:id" element={<GetBookDetail />} /> */}
        <Route path="/inquiry/pw" element={<FindPw />} />
        <Route path="/inquiry/id" element={<Findid />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* <Route path="/detail/:id" element={<Detail Detail={Detail} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};