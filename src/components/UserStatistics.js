import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import stat from "../assets/sample_statistics.json";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import * as api from "../services/api";
import PieChart from "../components/PieChart";
import { useNavigate,Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatShow = (props) => {
  const { authData } = useSelector((state) => state.userReducer);
  const [likelist, setlikeList] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);

  const [userstat, setUserstat] = useState([]); // user 통계 정보 받는 곳
  const [recommendlist, setRecommendlist] = useState([]) // 추천 책 받는 로직

  const navigator= useNavigate()

  const getbookshelflist = async () => {
    // console.log('북리스트다');
    await api.bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
        // console.log(booklist);
      })
      .catch((e) => console.log(e)); };


  // console.log(authData);
  const getlikebooklist = async () => {
    // console.log('좋아요리스트다');
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setlikeList(booklist);
        // console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getuserstat = async () => {
    console.log('userstat_home');
    await api
      .countBookshelfInfo()
      .then((data) => {
        const statlist = data?.data?.output || 'null';
        setUserstat(statlist);
        console.log(statlist);
      })
      .catch((e) => console.log(e));
  }


  useEffect(() => {
    console.log(222);
    getlikebooklist();
    getbookshelflist();

    getuserstat();
  }, []);

  const [bookStatsData, setBookStatsData] = useState(null);
  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  // 모달창 함수
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    setBookStatsData(stat);
  }, []);

  if (!bookStatsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        bookshelflist.length > 0?
        <Button
          style={{ marginTop: "0px", marginLeft:'3em' }}
          className="btn-round"
          color="primary"
          size="sm"
          // onClick={openModal}
          onClick={openModal}
        >
          {" "}
          나의 독서폴리오{" "}
        </Button>:
        <Link to='/upload'>
      <Button
        style={{ marginTop: "0px", marginLeft:'5px', width: "150px", height:"50px" }}
        className="btn-round"
        color="primary"
        size="sm"
        // onClick={openModal}
        >
        {" "}
        서재 업로드{" "}
      </Button>
        </Link>
      }

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
          Bookpolio
          <Button
            className="btn-round btn-neutral btn-icon"
            onClick={closeModal}
          >
            <i className="tim-icons icon-simple-remove" />
          </Button>
        </ModalHeader>

        <div style={{ margin: "15px" , }}>
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
              // width: '1000px',
              height: '450px',
              margin: '0 10px',
              // paddingTop: "10px",
              // paddingBottom: "10px",
              // paddingLeft: "0.8em",
              // paddingRight: "0.8em",
            }}
          >
            <div
              className="block_section1&2"
              style={{
                display: "block",
                paddingRight: "0.5em",
                paddingLeft:'0.5em',
                width: "50vw",
                // height:'50vh'
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
                    <h4 style={{ color: "#000000" }}>최애 카테고리: {userstat.maxCategory}</h4>
                    <h4 style={{ color: "#000000" }}>최애 작가: {userstat.maxAuthor}</h4>
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
                      평균 / 누적 페이지 수 : {userstat.page_mean}p / {userstat.page_sum}p
                    </h4>

                    <h4 style={{ color: "#000000" }}>
                      평균 / 누적 도서 무게 : {userstat.weight_mean}g / {userstat.weight_sum}g
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section3_chart"
              style={{
                width: "30vw",
                // height:'50vh',
                paddingRight: "0.5em",
                paddingLeft:'0.5em',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <PieChart categoryCount={userstat.category}/>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatShow;
