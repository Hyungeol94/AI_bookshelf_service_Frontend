// 참고 페이지: https://velog.io/@ppmyor/%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-React-24.-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TermTxt from "../components/Termtxt";
import Modal from 'react-modal';

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

  // 이용약관 파일 읽어오는 함수

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
  };

  const OpenTerms = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
      setModalIsOpen(true);
     
    };
  
    const closeModal = () => {
      setModalIsOpen(false);

    };
  
    return (
      <div>
        <button onClick={openModal}>
          이용약관 상세보기
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="File Modal"
        >
            <TermTxt/>
          <div>
          <div>
            <button style={{
        display: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "30%"
      }} onClick={closeModal}>닫기</button>
          </div></div>
        </Modal>
      </div>
    )
  };

 
  //  체크박스 함수 
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [infoCheck ,setInfoCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent =()=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setInfoCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setInfoCheck(false);
      setMarketingCheck(false);
    } 
  };
  
  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };
  
  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };

  const infoBtnEvent =()=>{
    if(infoCheck === false) {
      setInfoCheck(true)
    }else {
      setInfoCheck(false)
    }
  };
  
  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  

  useEffect(()=>{
    if(ageCheck===true && useCheck===true && infoCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])


  // 여기서부터 실제 출력

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
        <br/>
        <br/>
        <div>
        <h3> 사용자 이용약관 </h3>
        <div>
          </div>
          <div>
          < OpenTerms />  
          <br/>
          
          </div>    

          <br></br>
          
          <div>
            <input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
            <label for='all-check'> 이용약관 전체동의 </label> <br/>
            <input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
        		<label for="check1"> 만 14세 이상입니다 <span>[필수]</span></label> <br/>
            <input type="checkbox" id="check1" checked={useCheck} onChange={useBtnEvent}/>
        		<label for="check1"> Book is On&On 서비스 이용약관 동의 <span>[필수]</span></label> <br/>
            <input type="checkbox" id="check1" checked={infoCheck} onChange={infoBtnEvent}/>
        		<label for="check1"> 개인정보 수집 및 이용 동의 <span>[필수]</span></label> <br/>
            <input type="checkbox" id="check1" checked={marketingCheck} onChange={marketingBtnEvent}/>
        		<label for="check1"> 마케팅 정보 수신에 대한 동의 <span>[선택]</span></label> <br/>

          </div>
              
        </div>
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
