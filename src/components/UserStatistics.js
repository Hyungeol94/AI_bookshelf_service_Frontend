import React, { useEffect, useState } from 'react';
import stat from '../assets/sample_statistics.json';
import { Button, Modal, ModalHeader, ModalBody  } from "reactstrap";

const StatShow = (props) => {

  const {
    email,
    name,
    user_id,
    nickname,
    user_bookshelf,
    user_like_book,
    user_cart,
    user_interest,
    user_type,
  } = props?.data;
  console.log(props?.data);

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
        onClick={openModal}> 통계정보 확인하기 </Button>

      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="File Modal"
        size="lg"
        className="modal-box" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "600px", height: "200px"}}>

        <ModalHeader className="justify-content-center" >
          Bookpolio
        </ModalHeader>

        <div style={{margin: "15px"}}>
          
          <h1 style={{color: "black"}}>Book Stats</h1>
          <div>
            <img src={bookStatsData.image} alt="Book Stats" style={{width: "300px"}} />
          </div>
          <h3 style={{color: "black"}}>title: {bookStatsData.statsTitle}</h3>
          <p style={{color: "black"}}>
            info: {bookStatsData.statsInfo} <br/>
            Favorite Genre: {bookStatsData.favoriteGenre} <br/>
            Books Read: {bookStatsData.booksRead}
          </p>

          <Button 
            size="sm"
            onClick={closeModal}> 닫기 </Button>
        </div>

      </Modal>

    </div>
  );
};

export default StatShow;