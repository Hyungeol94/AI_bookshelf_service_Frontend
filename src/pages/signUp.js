import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// 참고 페이지: https://velog.io/@ppmyor/%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-React-24.-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84

function RegisterPage(props) {
    // redux의 dispatch
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // react hook에서 state 사용
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const EditProfileForm = () => {
      const [name, setBame] = useState("");
      const [email, setEmail] = useState("");

      const handleNameChange = (e) => {
        setName(e.target.value);
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };   
      
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    };

};
      return (
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}
          onSubmit={onSubmitHandler}
        >
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>
            <input type="email" value="Input email here" onChange={onEmailHandler} />
    
            <label>Name</label>
            <input type="text" value="Input name here" onChange={onNameHandler} />
    
            <label>Password</label>
            <input type="password" value="password1" onChange={onPasswordHandler} />
    
            <label>Confirm Password</label>
            <input type="password" value="password1" onChange={onConfirmPasswordHandler} />
    
            <br />
            <button>회원가입</button>
          </form>
        </div>
      );
    
    export default RegisterPage;