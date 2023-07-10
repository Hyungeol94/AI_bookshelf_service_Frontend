import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  Tooltip as TooltipReactStrap,
} from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import * as api from "../services/api";
import PieChart from "../components/PieChart";
import { Link } from "react-router-dom";
import { InfoOutlined, Clear } from "@mui/icons-material";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatShow = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const { authData } = useSelector((state) => state.userReducer);
  const [bookshelflist, setBookshelflist] = useState([]);
  const [userstat, setUserstat] = useState([]); // user 통계 정보 받는 곳

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const getbookshelflist = async () => {
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getuserstat = async () => {
    await api
      .countBookshelfInfo()
      .then((data) => {
        const statlist = data?.data?.output || "null";
        setUserstat(statlist);
        console.log(statlist);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getbookshelflist();
    getuserstat();
  }, []);

  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  // 모달창 함수
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {bookshelflist.length > 0 ? (
        <Button
          style={{ marginTop: "0px", marginLeft: "3em", width: "150px" }}
          className="btn-round"
          color="primary"
          size="sm"
          onClick={openModal}
        >
          {" "}
          나의 독서폴리오{" "}
        </Button>
      ) : (
        <Link to="/upload">
          <Button
            style={{
              marginTop: "0px",
              marginLeft: "5px",
              width: "150px",
              height: "50px",
            }}
            className="btn-round"
            color="primary"
            size="sm"
          >
            {" "}
            서재 업로드{" "}
          </Button>
        </Link>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentlabel="File Modal"
        size="xl"
        className="modal-box"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "10000px",
          height: "200px",
        }}
      >
        <ModalHeader className="justify-content-center">
          <p>Bookpolio</p>
          <Button className="btn-round btn-neutral" onClick={closeModal}>
            <Clear size={12} />
          </Button>
        </ModalHeader>

        <div style={{ margin: "15px" }}>
          <div
            className="subject"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <h2
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "3em",
              }}
            >
              {authData?.nickname || "undefined"}님의 독서폴리오
            </h2>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "normal",
              }}
            >
              {authData?.nickname || "undefined"}님의 Mybrary를 바탕으로 어떤 책
              취향이 있으신지 찾아봤어요!
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: '1000px',
              height: "450px",
              margin: 'auto'
            }}
          >
            <div
              className="block_section1&2"
              style={{
                display: "block",
                width: "500px",
                marginRight: '5px'
              }}
            >
              <div
                className="section1"
                style={{
                  // width: "40vw",
                  backgroundColor: "rgba(255, 159, 64, 0.2)",
                  marginBottom: "20px",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "3em",
                    paddingTop: "2em",
                    paddingBottom: "1em",
                  }}
                >
                  <div>
                    <h3 style={{ color: "#000000", fontWeight: "bold" }}>
                      {authData?.nickname || "undefined"}님의 독서 취향
                    </h3>
                  </div>
                  <div>
                    <h4 style={{ color: "#000000" }}>
                      총 독서 권수: {bookshelflist.length}권
                    </h4>
                    <div style={{ display: "flex" }}>
                      <h4 style={{ color: "#000000" }}>
                        최애 카테고리: {userstat.maxCategory}
                      </h4>
                      <InfoOutlined
                        style={{ marginLeft: "8px" }}
                        id="DisabledAutoHideExample"
                      />
                    </div>
                    <TooltipReactStrap
                      placement="right"
                      isOpen={tooltipOpen}
                      autohide={false}
                      target="DisabledAutoHideExample"
                      toggle={toggle}
                    >
                      카테고리는 네이버 책 정보를 <br /> 기반으로 분석됩니다.
                    </TooltipReactStrap>

                    <h4 style={{ color: "#000000" }}>
                      최애 작가: {userstat.maxAuthor}
                    </h4>
                  </div>
                </div>
              </div>

              <div
                className="section2_calc"
                style={{
                  // width: "40vw",
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "3em",
                    paddingTop: "2em",
                    paddingBottom: "1em",
                  }}
                >
                  <div>
                    <h3 style={{ color: "#000000", fontWeight: "bold" }}>
                      {authData?.nickname || "undefined"}님의 독서 기록
                    </h3>
                  </div>
                  <div>
                    <h4 style={{ color: "#000000" }}>
                      평균 / 누적 페이지 수 : {userstat.page_mean}p /{" "}
                      {userstat.page_sum}p
                    </h4>

                    <h4 style={{ color: "#000000" }}>
                      평균 / 누적 도서 무게 : {userstat.weight_mean}g /{" "}
                      {userstat.weight_sum}g
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section3_chart"
              style={{
                width: "500px",
                marginLeft: '5px',
                height: "430px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "rgba(236, 213, 227, 0.5)",
                // marginBottom: "20px",
                borderRadius: "20px 20px 20px 20px",
              }}
            >
              <PieChart categoryCount={userstat.category} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatShow;
