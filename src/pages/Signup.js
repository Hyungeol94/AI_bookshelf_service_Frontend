// react
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "react-modal";
// components
import TermTxt from "../components/Termtxt";
// rest-api
import * as api from "../services/api";
import {
  regEmail,
  regPwd,
  regPhone,
  checkNull,
  checkReg,
} from "../hooks/useCheck";

import {
  Select,
  Button,
  InputLabel,
  MenuItem,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function Signup() {
  const navigate = useNavigate();

  // useState
  const [Email, setEmail] = useState(""); // 이메일 (아이디)
  const [Password, setPassword] = useState(""); // 비밀번호
  const [Name, setName] = useState(""); // 이름
  const [Nickname, setNickname] = useState(""); // 닉네임(별명)
  const [ConfirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [PhoneNumber, setPhoneNumber] = useState(""); // 전화번호
  const [Occupation, setOccupation] = useState(""); // 직업
  const [RegistrationPath, setRegistrationPath] = useState(""); // 가입경로
  const [Sex, setSex] = useState("male"); // 성별
  const [Birth, setBirth] = useState(""); // 생년월일
  //  체크박스 함수
  const [emailCheck, setEmailCheck] = useState(null);
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  // 각각 const들은 아래 return 부분에서 입력값을 받음

  const onClickSubmit = async () => {
    /** 입력값 유효성 검사 */
    if (
      checkNull([
        Nickname,
        Sex,
        Birth,
        Email,
        Password,
        ConfirmPassword,
        Name,
        PhoneNumber,
        Occupation,
        RegistrationPath,
      ])
    ) {
      return alert("필수 항목을 모두 입력해주세요.");
    } else if (!emailCheck) {
      return alert("이메일 중복확인이 되어있지 않습니다.");
    } else if (Password.trim() !== ConfirmPassword.trim()) {
      return alert("비밀번호가 일치하지 않습니다.");
    } else if (!checkReg(Password.trim(), regPwd)) {
      return alert(
        "비밀번호는 영문, 숫자, 특수문자 합 8~15자리가 되어야 합니다."
      );
    } else if (!checkReg(PhoneNumber.trim(), regPhone)) {
      return alert("전화번호 형식이 알맞지 않습니다.");
    } else if (!useCheck || !infoCheck) {
      return alert("필수 서비스 약관에 동의해주세요.");
    }

    const user_info = {
      email: Email,
      password: Password,
      nickname: Nickname,
      name: Name,
      phone: PhoneNumber,
      birth: Birth,
      sex: Sex,
      work: Occupation,
      signuppath: RegistrationPath,
      useCheck: useCheck,
      infoCheck: infoCheck,
      marketingCheck: marketingCheck,
    };
    await api
      .signup(user_info)
      .then((data) => {
        alert("회원가입이 완료되었습니다.");
        navigate("/main");
      })
      .catch((e) => {
        if (e?.response?.status === 400) {
          console.log(e);
          alert("가입내역이 있는 이메일입니다.");
        } else {
          alert("알수 없는 오류(500)");
        }
      });
  };

  // 입력창 입력 관련
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // 이용약관 모달 함수
  const OpenTerms = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
      <div style={{}}>
        <Button onClick={openModal}>이용약관 상세보기</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLInputLabel="File Modal"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0 0.3)",
            },
            content: {
              "margin-top": "3%",
              width: "30%",
              height: "85%",
              "margin-left": "auto",
              "margin-right": "auto",
            },
          }}
        >
          <div>
            <TermTxt />

            <Button
              style={{
                display: "right",
                justifyContent: "right",
                alignItems: "right",
                // width: "30%",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
              onClick={closeModal}
            >
              닫기
            </Button>
          </div>
        </Modal>
      </div>
    );
  };

  // 전체체크
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setInfoCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setInfoCheck(false);
      setMarketingCheck(false);
    }
  };

  // 이용약관
  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  // 개인정보
  const infoBtnEvent = () => {
    if (infoCheck === false) {
      setInfoCheck(true);
    } else {
      setInfoCheck(false);
    }
  };

  // 광고성 정보수신 동의
  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  // 전부 체크 판단
  useEffect(() => {
    if (useCheck === true && infoCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, marketingCheck, infoCheck]);

  // 여기서부터 실제 출력
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        marginTop: "8em",
        font: "white",
      }}
    >
      <FormControl
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          borderColor: "white",
        }}
        onSubmit={onSubmitHandler}
      >
        <TextField
          type="text"
          id="nickname"
          value={Nickname}
          onChange={(e) => setNickname(e.target.value)}
          label="닉네임"
          variant="standard"
          inputProps={{ style: { color: "white" } }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TextField
            type="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            label="아이디 (이메일)"
            variant="standard"
            style={{ marginTop: "3em", width: "100%" }}
            inputProps={{ style: { color: "white" } }}
            SelectProps={{
              style: { color: "white", backgroundColor: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <Button
            style={{ width: "90px" }}
            onClick={async (e) => {
              if (!checkReg(Email.trim(), regEmail)) {
                return alert("이메일 형식이 알맞지 않습니다.");
              } else {
                await api
                  .checkuseremail({ email: Email })
                  .then((data) => {
                    setEmailCheck(data.data.info.check);
                    console.log(Email, data.data.info.check);
                  })
                  .catch((e) => console.log(e));
              }
            }}
          >
            중복확인
          </Button>
        </div>
        {emailCheck === null || undefined ? (
          <p></p>
        ) : emailCheck ? (
          <p>중복확인이 완료되었습니다</p>
        ) : (
          <p style={{ color: "red" }}>중복된 이메일입니다.</p>
        )}
        <TextField
          type="password"
          id="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          label="비밀번호 (영문, 숫자, 특수문자 합 8~15자리)"
          variant="standard"
          style={{ marginTop: "1em" }}
          inputProps={{
            autocomplete: "new-password",
            style: { color: "white" },
            form: {
              autocomplete: "off",
            },
          }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          type="password"
          id="confirmPassword"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="비밀번호 확인"
          variant="standard"
          style={{ marginTop: "1em" }}
          inputProps={{
            autocomplete: "new-password",
            style: { color: "white" },
            form: {
              autocomplete: "off",
            },
          }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          type="text"
          id="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          label="이름"
          variant="standard"
          style={{ marginTop: "3em" }}
          inputProps={{ style: { color: "white" } }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          type="text"
          id="phoneNumber"
          value={PhoneNumber}
          onChange={(e) => {
            if (e.target.value.length <= 12) setPhoneNumber(e.target.value);
          }}
          label="전화번호 (- 없이 숫자만 입력)"
          variant="standard"
          style={{ marginTop: "1em" }}
          inputProps={{ style: { color: "white" } }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          type="text"
          id="birth"
          value={Birth}
          onClick={(e) => {
            setBirth("");
          }}
          onChange={(e) => {
            if (e.target.value.length <= 6) setBirth(e.target.value);
          }}
          label="생년월일 (6자리)"
          variant="standard"
          style={{ marginTop: "1em" }}
          inputProps={{
            style: { color: "white" },
          }}
          SelectProps={{ style: { color: "white", backgroundColor: "white" } }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            style={{ marginTop: "1em", color: "White" }}
          >
            성별
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={Sex}
            onChange={(e) => {
              setSex(e.target.value);
            }}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <FormControlLabel value="male" control={<Radio />} label="남성" />
            <FormControlLabel value="female" control={<Radio />} label="여성" />
          </RadioGroup>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ marginTop: "3em", font: "White" }}
        >
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{ color: "white" }}
          >
            직업
          </InputLabel>
          <Select
            id="occupation"
            value={Occupation}
            onChange={(e) => setOccupation(e.target.value)}
            label="직업"
            color="primary"
            sx={{ color: "white" }}
            MenuProps={{ style: { color: "white" } }}
            itemProp={{
              style: { color: "white", backgroundColor: "white" },
            }}
            SelectDisplayProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          >
            <MenuItem value="개발자"> 개발자 </MenuItem>
            <MenuItem value="경영사무">경영•사무•금융•보험직</MenuItem>
            <MenuItem value="연구공학">경영•사무•금융•보험직</MenuItem>
            <MenuItem value="교육법률">
              교육•법률•사회복지•경찰•소방직 및 군인
            </MenuItem>
            <MenuItem value="보건의료">보건•의료직</MenuItem>
            <MenuItem value="예술">예술•디자인•방송•스포츠직</MenuItem>
            <MenuItem value="서비스">미용•여행•숙박•음식•경비•청소직</MenuItem>
            <MenuItem value="영업판매">영업•판매•운전•운송직</MenuItem>
            <MenuItem value="건설채굴">건설•채굴직</MenuItem>
            <MenuItem value="설치정비">설치•정비•생산직</MenuItem>
            <MenuItem value="농림어업">농림어업직</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" style={{ marginTop: "1em" }}>
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{ color: "white" }}
          >
            가입경로
          </InputLabel>
          <Select
            sx={{ color: "white" }}
            id="registrationPath"
            value={RegistrationPath}
            onChange={(e) => setRegistrationPath(e.target.value)}
            label="가입경로"
          >
            <MenuItem value="지인의 권유">지인의 권유</MenuItem>
            <MenuItem value="광고">광고</MenuItem>
            <MenuItem value="다른 서비스를 통해서">
              다른 서비스를 통해서
            </MenuItem>
          </Select>
        </FormControl>
        <div style={{ marginTop: "3em" }}>
          <h3> 사용자 이용약관 </h3>

          <OpenTerms />
          <br />
          <br />
          <div style={{ right: 0 }}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position">
                <FormControlLabel
                  control={<Checkbox />}
                  id="all-check"
                  checked={allCheck}
                  onChange={allBtnEvent}
                  label="전체동의"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  id="check1"
                  checked={useCheck}
                  onChange={useBtnEvent}
                  label="Book is On&On 서비스 이용약관 동의 [필수]"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  id="check1"
                  checked={infoCheck}
                  onChange={infoBtnEvent}
                  label="개인정보 수집 및 이용 동의 [필수]"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  id="check1"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                  label="마케팅 정보 수신에 대한 동의 [선택]"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5em",
            }}
          >
            <Link to="../">
              <Button style={{ width: "7em" }}>취소</Button>
            </Link>
            <Button
              type="submit"
              style={{ width: "20em", fontWeight: "bold" }}
              onClick={onClickSubmit}
            >
              회원가입
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}

export default Signup;
