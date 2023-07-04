// react
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// hooks
import { regEmail, checkReg, checkNull } from "../hooks/useCheck";
// actions
import { userLogin } from "../redux/actions/userAction";
// styles
import { Button, TextField, FormControl } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [id, setId] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginState } = useSelector((state) => state.userReducer);

  /** redux를 초기화하기 위함 */
  useEffect(() => {
    localStorage.removeItem("persist:root");
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else if (name === "password") setPassword(value);
  };

  useEffect(() => {
    // console.log("useEffect");
    if (loginState) {
      // console.log("loginState");
      navigate("/main");
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
    // e.preventDefault();

    if (checkNull([id, password])) {
      return alert("아이디와 비밀번호 모두 입력해주세요.");
    } else if (!checkReg(id.trim(), regEmail)) {
      return alert("이메일 형식이 아닙니다.");
    }
    const login_info = {
      email: id,
      password,
    };
    dispatch(userLogin(login_info));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        font: "white",
      }}
    >
      <div>
        <h1>
          <strong> Login </strong>
        </h1>
        <FormControl style={{ width: "300px" }}>
          <TextField
            type="text"
            id="id"
            value={id}
            name="id"
            onChange={handleInput}
            label="ID (e-mail)"
            variant="standard"
            inputProps={{ style: { color: "white" } }}
            SelectProps={{
              style: { color: "white", backgroundColor: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onClickLogin();
              }
            }}
            label="Password"
            style={{ marginTop: "0em" }}
            variant="standard"
            placeholder="Password"
            inputProps={{
              style: { color: "white" },
            }}
            SelectProps={{
              style: { color: "white", backgroundColor: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <FormControl>
            <Button
              size="large"
              variant="outlined"
              type="submit"
              color="info"
              onClick={onClickLogin}
              style={{
                marginTop: "1em",
                color: "white",
                borderColor: "transparent",
                background: "#344675",
              }}
            >
              로그인
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1em",
              }}
            >
              <div>
                <Button
                  size="small"
                  onClick={moveFindId}
                  style={{ color: "white" }}
                >
                  아이디 찾기
                </Button>
                <Button
                  size="small"
                  onClick={moveFindPw}
                  style={{ color: "white" }}
                >
                  비밀번호 찾기
                </Button>
              </div>
              <Button
                size="small"
                onClick={moveSignupPage}
                style={{ color: "white" }}
              >
                회원가입
              </Button>
            </div>
          </FormControl>
        </FormControl>
      </div>
    </div>
  );
};
