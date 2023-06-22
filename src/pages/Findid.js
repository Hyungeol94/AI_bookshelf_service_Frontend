import React, { useState } from 'react';
import userData from '../assets/sample_user.json';
import "../styles/Findid.css";
import LoginNavbar from "components/Navbars/LoginNavbar";

const ForgotId = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('')
  const [name, setName] = useState('');
  const [foundId, setFoundId] = useState('');

  // JSON 파일이 배열이 아닌 경우 배열로 변환
  const users = Array.isArray(userData) ? userData : Object.values(userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    // sample_user.json에서 전화번호와 일치하는 사용자 찾기
    // JSON 파일 구조에 맞게 user.user_phone 사용
    const user = users.find((user) => user.user_phone === phoneNumber);

    if (user) {
      // JSON 파일 구조에 맞게 user.user_email 사용
      setFoundId(user.user_email);
      alert('아이디를 찾았습니다!');
    } else {
      setFoundId('');
      alert('해당 전화번호와 일치하는 사용자를 찾을 수 없습니다. 전화번호를 다시 확인해주세요.');
    }
  };

  return (
    <div>
      < LoginNavbar />
      <div class="container">
      <h2 class="title">아이디 찾기</h2>
      <form onSubmit={handleSubmit} className='inside-container'>
        <label htmlFor="phoneNumber" class='label-form'>전화번호:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="010-0000-0000"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className='input-form'
          required
        /><br/>
        <label htmlFor="name" class='label-form'>이름:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="홍길동"
          onChange={(e) => setName(e.target.value)}
          className='input-form'
          required
        /><br/>
        <label htmlFor="birthDate" class='label-form'>생년월일:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className='input-form'
          required
        /><br/>
        <button type="submit" class="button">아이디 찾기</button>
      </form>
      {foundId && <div>찾은 아이디: {foundId}</div>}
    </div>
    </div>
  );
};

export default ForgotId;
