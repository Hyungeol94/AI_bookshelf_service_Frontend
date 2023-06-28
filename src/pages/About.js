import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";


const AboutUs = () => {

  return(
    <div className="wrapper" style={{fontFamily: ""}}>
      <IndexNavbar />
      <div style={{ "margin-top": "15%", "margin-left": "16%", "margin-bottom": "15%", display:"flex", alignItems: "center" }} className="about-us">
        {/* <img src="https://aivle.kt.co.kr/app/file/view2/546" style={{width: "800px"}}/>  <br/> */}
        <img alt="..." className="path" src={require("assets/img/path1.png")}
        style={{
          "pointer-events": "none",
          "z-index": 0
        }} />
        <img src={require("assets/img/us.jpg")} style={{ width: "520px",  border: "5px solid rgb(220, 220, 220)", }} />
        <div style={{ display: "flex", flexDirection: "column", width: "500px", "margin-left": "60px"}}>
          <h1 style={{ "font-size":"60px" }}> <strong> AIVLE 17조 </strong></h1>
          <h3>이 웹사이트는 KT AIVLE SCHOOL 3기 AI 개발자 교육과정 5반 17조의 빅프로젝트 산출물입니다.</h3>
          <h4> 조장: 김영빈 <br/> 
          조원: 김덕주, 박재경, 신윤하, 이현걸, 천승우, 최서연 <br/>  <br/> 
          FE: 김덕주, 이현걸, 천승우, 최서연<br/> 
          BE: 김덕주, 신윤하, 박재경<br/> 
          AI: 김영빈, 박재경</h4>
  
          <h4> <strong>Contact Us</strong><br/>연락처: 000-000-0000 <br/> 이메일: email@gmail.com <br/> 주소: 경기 성남시 분당구 불정로 90</h4>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default AboutUs;