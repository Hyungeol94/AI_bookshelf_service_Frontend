// import React, { useEffect, useState } from 'react';
// import stat from '../assets/sample_statistics.json';

// const StatShow = () => {
//   const [bookStatsData, setBookStatsData] = useState(null);

//   useEffect(() => {
//     // JSON 파일 데이터를 불러옵니다.
//     setBookStatsData(stat);
//   }, []);

//   if (!bookStatsData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Book Stats</h1>
//       <div>
//         <img src={bookStatsData.image} alt="Book Stats" style = {{
//         width: "300px"}}/>
//       </div>
//       <h3>title: {bookStatsData.statsTitle}</h3>
//       <p>info: {bookStatsData.statsInfo}</p>
//       <p>Favorite Genre: {bookStatsData.favoriteGenre}</p>
//       <p>Books Read: {bookStatsData.booksRead}</p>
//     </div>
//   );
// };

// export default StatShow;


import React, { useEffect, useState } from 'react';
import stat from '../assets/sample_statistics.json';
import { Modal } from "reactstrap";

const StatShow = () => {
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
    // JSON 파일 데이터를 불러옵니다.
    setBookStatsData(stat);
  }, []);

  return (
    <div>
      <button onClick={openModal}> 통계정보 확인하기 </button>
      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="File Modal"
        className="modal-box" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "600px", height: "200px" }}>
        <div style={{margin: "15px"}}>
          <button onClick={closeModal}> 닫기 </button>
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
        </div>
      </Modal>
    </div>
  );
};

export default StatShow;