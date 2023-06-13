// ./pages/UserStatistics.js
import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json"; // << 통계정보로 바꿔야됨
import getlist from "../components/GetList";




// stats 이미지와 제목, 설명 표시, 가장 많이 읽은 책과 장르, 총 권수 등
function stats(statstitle, statsinfo){
  const Stats = (props) => (
    <div>
      <div>
        <img src={props.image} 
        alt={props.statstitle} 
        width={500} 
        height={500}
        />
      </div>
      <h3>{props.statstitle}</h3>
      <h5>{props.statsinfo}</h5>
      <div>{props.statsinfo}<p></p>
            {props.FavoriteGenre}<p></p>
            {props.BooksRead}<p></p>
            . . .
      </div>
    </div>
  );
}
export default stats;