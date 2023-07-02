import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginNavbar from "components/Navbars/LoginNavbar";
import "../styles/Findid.css";
import Login from './Login';
import {Button} from "reactstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 서버로 이메일 전송 로직 작성
  };

  // 로그인 및 메인 페이지로 이동
const moveToLogin = () => {
  navigate("/login");
};
const moveToMain = () => {
  navigate("/");
};

  return (
    <div>
      < LoginNavbar />

      <div class='ctn'>
        <h2 className='title'>비밀번호 찾기</h2>
        <h4 class='explain-txt'> 가입할 때 사용한 이메일 주소를 입력하면 해당 주소로 비밀번호 변경 e-mail이 발송됩니다. </h4>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="email"
            placeholder="이메일(e-mail)"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-form'
            required
          />
        </form>
        <div>
          <Button type="submit" class="button" 
                    style={{width:'278px', height:'40px', marginTop:'20px'}}> 
                    비밀번호 찾기 </Button> <br/>
          <button onClick={moveToLogin} class="mini-button"> 뒤로가기 </button>
          <button onClick={moveToMain} class="mini-button"> 홈으로 </button>
        </div>
        
      </div>
    </div>
  );
};

export default ForgotPassword;