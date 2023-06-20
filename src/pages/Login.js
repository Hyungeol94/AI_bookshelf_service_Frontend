import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { regEmail, checkReg, checkNull } from "../hooks/useCheck";
import { userLogin } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 참고 페이지: https://ddeck.tistory.com/33
// 참고 페이지 2 (코드는 안봄): https://velog.io/@94lfnv/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// Please note that the provided code assumes you have a server running at 'http://49.50.162.189:4000' that handles the /auth/signin endpoint. Make sure the server is running and properly configured to handle the request.

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginState } = useSelector((state) => state.userReducer);

  /** redux를 초기화하기 위함 */
  useEffect(() => {
    localStorage.removeItem("persist:root");
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") setPassword(value);
  };

  useEffect(() => {
    console.log("useEffect");
    if (loginState) {
      console.log("loginState");
      navigate("/");
    }
  }, [loginState, navigate]);

  // /** 회원가입 페이지로 이동 */
  const moveSignupPage = () => {
    navigate("/Signup");
  };

  // /** 아이디 찾기 페이지로 이동 */
  const moveFindId = () => {
    navigate("/inquiry/id");
  };

  // /** 비밀번호 찾기 페이지로 이동 */
  const moveFindPw = () => {
    navigate("/inquiry/pw");
  };

  // login 버튼 이벤트
  const onClickLogin = async (e) => {
    e.preventDefault();

    if (checkNull([email, password])) {
      return alert("아이디와 비밀번호 모두 입력해주세요.");
    } else if (!checkReg(email.trim(), regEmail)) {
      return alert("이메일 형식이 아닙니다.");
    }
    const login_info = {
      email,
      password,
    };
    dispatch(userLogin(login_info));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id"> ID: </label>
        <input type="text" name="email" value={email} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="input_pw"> PW: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </div>
      <div>
        <button type="submit" onClick={onClickLogin}>
          Login
        </button>
        <button onClick={moveSignupPage}> sign up </button>
        <br/>
        <button onClick={moveFindId}> ID 찾기 </button>
        <button onClick={moveFindPw}> 비밀번호 찾기 </button>
        
      </div>
    </div>
  );
};
