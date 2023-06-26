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
    <div className="wrapper">
      <IndexNavbar />
      <div style={{ "margin-top": "9%", "margin-left": "10%", "margin-bottom": "7%", display:"flex", alignItems: "center" }} className="about-us">
        {/* <img src="https://aivle.kt.co.kr/app/file/view2/546" style={{width: "800px"}}/>  <br/> */}
        <img src={require("assets/img/us.jpg")} style={{ width: "500px",  border: "5px solid rgb(220, 220, 220)", }} />
        <div style={{ display: "flex", flexDirection: "column", width: "600px", "margin-left": "32px"}}>
          <p className="title"> aivle 17조 </p>
          <p> B냉C켜조 </p>
          <h3>이 웹사이트는 KT AIVLE SCHOOL AI 개발자 교육 3기 과정 17조의 빅프로젝트 산출물입니다. </h3>
          <h4> 조장: 김영빈 </h4>
          <h4> 조원: 김덕주, 박재경, 신윤하, 이현걸, 천승우, 최서연 </h4>
        </div>
      </div>
      <img alt="..." className="path" src={require("assets/img/path1.png")}
        style={{
          "pointer-events": "none",
          "z-index": 0
        }} />
      <Footer />
    </div>
  );

};

export default AboutUs;