import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import stat from "../assets/sample_statistics.json";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import * as api from "../services/api";
import PieChart from "../components/PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatShow = (props) => {
  const { authData } = useSelector((state) => state.userReducer);
  const [likelist, setlikeList] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);

  const getbookshelflist = async () => {
    console.log('북리스트다');
    await api.bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e)); };


  // console.log(authData);
  const getlikebooklist = async () => {
    console.log('좋아요리스트다');
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setlikeList(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  console.log(likelist);

  useEffect(() => {
    console.log(222);
    getlikebooklist();
    getbookshelflist();
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

  let maxAuthor = '-';
  let maxCategory = '-';
  let page_sum = 0;
  let weight_sum = 0;
  let weight_mean = 0;
  let page_mean = 0;
  let authorCount = {}
  let categoryCount = {}

  if (bookshelflist.length > 0) {

  for (let i = 0; i < bookshelflist.length; i++){
    page_sum = page_sum + bookshelflist[i].page
    weight_sum = weight_sum + bookshelflist[i].weight
  }

  bookshelflist.forEach((book) => {
    const author = book.author;
    const category = book.category;
    if (authorCount[author]) {
      authorCount[author] += 1;
    } else {
      authorCount[author] = 1;
    }
    if (categoryCount[category]) {
      categoryCount[category] += 1;
    } else {
      categoryCount[category] = 1;
    }
  });

  page_mean = Math.floor( page_sum / bookshelflist.length ) 
  weight_mean = Math.floor( weight_sum / bookshelflist.length ) 
  maxAuthor = Object.entries(authorCount).reduce((prev, curr) => {
                      return curr[1] > prev[1] ? curr : prev;
                    })[0];
  maxCategory = Object.entries(categoryCount).reduce((prev, curr) => {
                        return curr[1] > prev[1] ? curr : prev;
                      })[0];
  console.log(authorCount);
  console.log(categoryCount);
  }


  return (
    <div>
      <Button
        style={{ marginTop: "0px", marginLeft:'5px', width: "150px", height:"50px" }}
        className="btn-round"
        color="primary"
        size="sm"
        onClick={openModal}
      >
        {" "}
        나의 독서폴리오{" "}
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="File Modal"
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

        <div style={{ margin: "15px" }}>
          <div
            className="subject"
            style={{ marginTop: "20px", marginBottom: "30px" }}
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
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              marginBottom: "10px",
              paddingLeft: "0.8em",
              paddingRight: "0.8em",
            }}
          >
            <div
              className="block_section1&2"
              style={{
                display: "block",
                marginLeft: "1em",
              }}
            >
              <div
                className="section1"
                style={{
                  width: "40vw",
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
                    <h4 style={{ color: "#000000" }}>최애 카테고리: {maxCategory}</h4>
                    <h4 style={{ color: "#000000" }}>최애 작가: {maxAuthor}</h4>
                  </div>
                </div>
              </div>

              <div
                className="section2_calc"
                style={{
                  width: "40vw",
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
                      평균 / 누적 페이지 수 : {page_mean}p / {page_sum}p
                    </h4>

                    <h4 style={{ color: "#000000" }}>
                      평균 / 누적 도서 무게 : {weight_mean}g / {weight_sum}g
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section3_chart"
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PieChart categoryCount={categoryCount}/>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatShow;
