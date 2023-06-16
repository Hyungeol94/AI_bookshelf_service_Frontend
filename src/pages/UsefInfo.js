import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    // 회원 정보 불러오기 API 요청
    axios.get("/api/user/profile").then((response) => {
      const { name, email } = response.data;
      setName(name);
      setEmail(email);
    });
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 회원 정보 업데이트 요청
    axios.put("/api/user/profile", { name, email }).then((response) => {
      // 업데이트 성공 시 처리
      history.push("/profile"); // 프로필 페이지로 리다이렉션
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    // 비밀번호 업데이트 요청
    axios
      .put("/api/user/password", { currentPassword, newPassword })
      .then((response) => {
        // 비밀번호 업데이트 성공 시 처리
        setCurrentPassword("");
        setNewPassword("");
        // 성공 메시지 등을 처리할 수 있습니다.
      });
  };

  return (
    <div>
      <h2>회원 정보 수정</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <button type="submit">회원 정보 수정</button>
      </form>

      <h2>비밀번호 변경</h2>
      <form onSubmit={handlePasswordChange}>
        <label htmlFor="currentPassword">현재 비밀번호:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />

        <label htmlFor="newPassword">새로운 비밀번호:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />

        <button type="submit">비밀번호 변경</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
