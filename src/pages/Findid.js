import React, { useEffect, useState } from "react";
// import userData from '../assets/sample_user.json';
import "../styles/Findid.css";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "components/Navbars/LoginNavbar";

import { Button } from "reactstrap";

const ForgotId = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("구현중입니다.");

    navigate("/login");
  }, []);

  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  // const [name, setName] = useState("");
  // const [foundId, setFoundId] = useState("");
  // // JSON 파일이 배열이 아닌 경우 배열로 변환
  // const users = Array.isArray(userData) ? userData : Object.values(userData);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // sample_user.json에서 전화번호와 일치하는 사용자 찾기
  //   // JSON 파일 구조에 맞게 user.user_phone 사용
  //   const user = users.find((user) => user.user_phone === phoneNumber);
  //   if (user) {
  //     // JSON 파일 구조에 맞게 user.user_email 사용
  //     setFoundId(user.user_email);
  //     alert("아이디를 찾았습니다!");
  //   } else {
  //     setFoundId("");
  //     alert(
  //       "해당 전화번호와 일치하는 사용자를 찾을 수 없습니다. 전화번호를 다시 확인해주세요."
  //     );
  //   }
  // };
  // const navigate = useNavigate();
  // const moveToLogin = () => {
  //   navigate("/login");
  // };
  // const moveToMain = () => {
  //   navigate("/");
  // };
  // return (
  //   <div>
  //     <LoginNavbar />
  //     <div
  //     // style={{
  //     //   display: "flex",
  //     //   justifyContent: "center",
  //     //   alignItems: "center",
  //     //   width: "100%",
  //     //   height: "100vh",
  //     //   font: "white",
  //     // }}
  //     >
  //       <div
  //         class="container"
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           flexDirection: "column",
  //           width: "100%",
  //           height: "100vh",
  //           font: "white",
  //         }}
  //       >
  //         <div
  //           style={{
  //             marginBottom: "50px",
  //           }}
  //         >
  //           <h2 class="title">아이디 찾기</h2>
  //         </div>
  //         <form onSubmit={handleSubmit} className="inside-container">
  //           <label
  //             htmlFor="phoneNumber"
  //             class="label-form"
  //             style={{ color: "#ffffff" }}
  //           ></label>
  //           <input
  //             type="tel"
  //             id="phoneNumber"
  //             value={phoneNumber}
  //             placeholder="전화번호(- 제외하고 입력)"
  //             onChange={(e) => setPhoneNumber(e.target.value)}
  //             className="input-form"
  //             required
  //           />
  //           <br />
  //           <label
  //             htmlFor="name"
  //             class="label-form"
  //             style={{ color: "#ffffff" }}
  //           ></label>
  //           <input
  //             type="text"
  //             id="name"
  //             value={name}
  //             placeholder="이름"
  //             onChange={(e) => setName(e.target.value)}
  //             className="input-form"
  //             required
  //           />
  //           <br />
  //           <label
  //             htmlFor="birthDate"
  //             class="label-form"
  //             style={{ color: "#ffffff" }}
  //           ></label>
  //           <input
  //             type="date"
  //             id="birthDate"
  //             value={birthDate}
  //             onChange={(e) => setBirthDate(e.target.value)}
  //             className="input-form"
  //             required
  //           />
  //           <br />
  //           <Button
  //             variant="contained"
  //             class="button"
  //             style={{ width: "278px", height: "40px", marginTop: "20px" }}
  //           >
  //             아이디 찾기
  //           </Button>
  //           <div style={{ "align-items": "flex-start", left: 0 }}>
  //             <button onClick={moveToLogin} class="mini-button">
  //               {" "}
  //               뒤로가기{" "}
  //             </button>
  //             <button onClick={moveToMain} class="mini-button">
  //               {" "}
  //               홈으로{" "}
  //             </button>
  //           </div>
  //         </form>
  //         {foundId && <div>찾은 아이디: {foundId}</div>}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ForgotId;
