// ./pages/UserStatistics.js
import React from "react";
import sample from "../assets/sample_statistics.json"; 
// import getlist from "../components/GetList";
// import BookList from "../components/BookList";



// stats 이미지와 제목, 설명 표시, 가장 많이 읽은 책과 장르, 총 권수 등

const StatsPage = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.statstitle} width={500} height={500} />
      </div>
      <h3>{props.statstitle}</h3>
      <h5>{props.statsinfo}</h5>
      <div>
        <p>Favorite Genre: {props.FavoriteGenre}</p>
        <p>Books Read: {props.BooksRead}</p>
        {/* 추가적인 항목들 */}
      </div>
    </div>
  );
};

function Stats(statstitle, statsinfo){
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
export default Stats;
