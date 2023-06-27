import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import stat from '../assets/sample_statistics.json';
import { Button, Modal, ModalHeader, ModalBody  } from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as api from "../services/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data_chart = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
    },
  ],
};


const StatShow = (props) => {

  const [likelist, setlikeList] = useState([]);
  const { authData } = useSelector((state) => state.userReducer);

  // console.log(authData);
  const getlikebooklist = async () => {
    console.log(111);
    await api
      .likebooklist()
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
  };

  return (
    <div>
      <Button 
        style={{ marginTop: "0px" }}
        className="btn-round"
        color="primary"
        size="sm"
        onClick={openModal}> 나의 독서폴리오 확인하기 </Button>

      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="File Modal"
        size="xl"
        className="modal-box" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "10000px", height: "200px"}}>

        <ModalHeader className="justify-content-center" >
          Bookpolio
          <Button
            className="btn-round btn-neutral btn-icon"
            onClick={closeModal}> 
            <i className="tim-icons icon-simple-remove" />
          </Button>
        </ModalHeader>

        <div style={{margin: "15px"}}>
          <div className='subject'
            style={{marginTop:'20px', marginBottom:'30px'}}>
            <h2 style={{color: "black", textAlign:'center', fontWeight:'bold', fontSize:'3em'}}>{authData?.nickname || "undefined"}님의 독서폴리오</h2>
            <h4 style={{color: "black", textAlign:'center', fontWeight:'normal', }}>{authData?.nickname || "undefined"}님의 Mybrary를 바탕으로 어떤 책 취향이 있으신지 찾아봤어요!</h4>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: "center",
              alignItems: "center",
              marginTop: '10px',
              marginBottom: '10px',
              paddingLeft: '0.8em',
              paddingRight: '0.8em',
            }}
          >
              
              <div className='block_section1&2'
                style={{
                  display: 'block',
                  marginLeft:'1em'
                }}>

                <div className='section1'
                  style={{
                    width: '40vw',
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    marginBottom: '20px',
                    borderRadius: '20px 20px 20px 20px' }}>
                  <div style={{ paddingLeft: '3em', paddingTop: '2em', paddingBottom: '1em' }}>
                    <div>
                      <h3 style={{ color: '#000000', fontWeight:'bold' }}>{authData?.nickname || "undefined"}님의 독서 취향</h3>
                    </div>
                    <div>
                      <h4 style={{ color: '#000000' }}>총 독서 권수: {likelist.length}권</h4>
                      <h4 style={{ color: '#000000' }}>최애 카테고리: </h4>
                      <h4 style={{ color: '#000000' }}>최애 작가: </h4>
                    </div>
                  </div>
                </div>

                <div className='section2_calc'
                  style={{
                    width: '40vw',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderRadius: '20px 20px 20px 20px' }}>
                  <div style={{ paddingLeft: '3em', paddingTop: '2em', paddingBottom: '1em' }}>
                    <div>
                      <h3 style={{ color: '#000000', fontWeight:'bold' }}>{authData?.nickname || "undefined"}님의 독서 기록</h3>
                    </div>
                    <div>
                      <h4 style={{ color: '#000000' }}>평균 / 누적 페이지 수 : </h4>
                      <h4 style={{ color: '#000000' }}>평균 / 누적 페이지 수 : </h4>
                      <h4 style={{ color: '#000000' }}>평균 / 누적 도서 무게 : </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='section3_chart'
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <Pie data={data_chart}
                  style={{width:'50%'}} />
              </div>

              </div>

        </div>

      </Modal>

    </div>
  );
};

export default StatShow;