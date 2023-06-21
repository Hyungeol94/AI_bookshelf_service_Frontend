import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
      <h2>비밀번호 찾기</h2>
      <p> 가입할 때 사용한 이메일 주소를 입력하면 해당 주소로 비밀번호 변경 e-mail이 발송됩니다. </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일(e-mail)"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit"> 비밀번호 찾기 </button>
      </form>
      <button onClick={moveToLogin}> 뒤로가기 </button>
      <button onClick={moveToMain}> 홈으로 </button>
    </div>
  );
};

export default ForgotPassword;