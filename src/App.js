import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import "assets/scss/blk-design-system-react.scss";
// import "assets/css/nucleo-icons.css";
// import "assets/demo/demo.css";

// ourpage
import IndexNavbar from "./components/Navbars/IndexNavbar";
import UserBookShelf from "./pages/UserBookShelf";
import Searchpage from "./pages/Search";
import User from "./pages/ProfileEdit";
import TermsPage from "./pages/Terms";
import SignUp from "./pages/Signup";
import FindPw from "./pages/Findpw";
import Findid from "./pages/Findid";
import AboutUs from "./pages/About";
import Result from "./pages/Result";
import Upload from "./pages/Upload";
import First from "./pages/First";
import Login from "./pages/Login";
import Home from "./pages/Home";
import auth from "./hooks/auth";

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
        <Route path="/" element={<HeaderWrapper />}>
          {/* 회원 O */}
          <Route path="bookshelf" element={auth(UserBookShelf, true)} />
          <Route path="search" element={auth(Searchpage, true)} />
          <Route path="editprofile" element={auth(User, true)} />
          <Route path="upload" element={auth(Upload, true)} />
          <Route path="result" element={auth(Result, true)} />
          <Route path="profile" element={auth(User, true)} />
          <Route path="main" element={auth(Home, true)} />
          {/* 회원 X */}
          <Route path="inquiry/id" element={auth(Findid, false)} />
          <Route path="inquiry/pw" element={auth(FindPw, false)} />
          <Route path="signup" element={auth(SignUp, false)} />
          <Route path="login" element={auth(Login, false)} />
          <Route path="" element={auth(First, false)} />
          {/* anybody */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
