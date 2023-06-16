// 참고 페이지: https://velog.io/@ppmyor/%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-React-24.-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Signup() {
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [RegistrationPath, setRegistrationPath] = useState("");

  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    provisionAgreed: false,
    locationAgreed: false,
    enventAlarmAgreed: false,
    serviceAlarmAgreed: false,
  });

  const handleAgreementChange = (event) => {
    const { name, checked } = event.target;

    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true
    );
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (event) => {
    const { checked } = event.target;
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
    );
    setAllAgreed(checked);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 폼 제출 로직을 처리합니다.
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="id">아이디</label>
        <input
          type="text"
          id="id"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          type="password"
          id="confirmPassword"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phoneNumber">전화번호</label>
        <input
          type="text"
          id="phoneNumber"
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="occupation">직업</label>
        <select
          id="occupation"
          value={Occupation}
          onChange={(e) => setOccupation(e.target.value)}
        >
          <option value="1">개발자</option>
          <option value="2">학생</option>
          <option value="3">기획자</option>
        </select>

        <label htmlFor="registrationPath">가입경로</label>
        <select
          id="registrationPath"
          value={RegistrationPath}
          onChange={(e) => setRegistrationPath(e.target.value)}
        >
          <option value="1">지인의 권유</option>
          <option value="2">광고</option>
          <option value="3">다른 서비스를 통해서</option>
        </select>

        <h3> 사용자 이용약관 </h3>
        <div>
          1. 개인정보의 처리목적 <p></p>
          2. 개인정보의 처리 및 보유기간<p></p>
          3. 개인정보의 제3자 제공에 관한 사항<p></p>
          4. 개인정보의 파기절차 및 파기방법<p></p>
          (법 제 21조 제 1항 단서에 따라 개인정보를 보존하여야 하는 경우에는 그
          보전근거와 보존하는 개인정보 항목)<p></p>
          5. 개인정보 처리의 위탁에 관한 사항<p></p>
          6. 정보주체와 법정대리인의 권리/의무 및 그 행사방법에 대한 사항<p></p>
          7. 개인정보 보호책임자의 성명 또는 개인정보 보호업무 및 관련
          고층사항을 처리하는 부서의 명칭과 전화번호 등 연락처<p></p>
          8. 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의
          설치/운영 및 그 거부에 관한 사항<p></p>
          9. 처리하는 개인정보의 항목<p></p>. . .
        </div>
        <label htmlFor="agree_check_all">이용약관 전체동의</label>
        <br></br>
        <input
          type="checkbox"
          id="agree_check_all"
          name="agree_check_all"
          checked={allAgreed}
          onChange={handleAllAgreementChange}
        />
        <br />
        <button>회원가입</button>
        <Link to="../">
          <button> 취소(메인 페이지) </button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
