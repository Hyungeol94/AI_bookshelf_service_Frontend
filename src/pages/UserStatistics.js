import React, { useEffect, useState } from "react";
import sample from "../assets/sample_statistics.json";


// stats 이미지와 제목, 설명 표시, 가장 많이 읽은 책과 장르, 총 권수 등
function UserStatistics() {
  const [statistics, setStatistics] = useState([]);

  return (
    <div>
      <h1>사용자 통계</h1>
      {statistics.map((stat) => (
        <div key={stat.id}>
          <img src={stat.statsImage} alt={stat.statstitle} width={500} height={500} />
          <h3>{stat.statstitle}</h3>
          <h5>{stat.statsinfo}</h5>
          <p>좋아하는 장르: {stat.FavoriteGenre}</p>
          <p>읽은 책 수: {stat.BooksRead}</p>
          {/* <link to="/index"><button>back to home</button></link> */}
        </div>
      ))}
    </div>
  );
}

export default UserStatistics;
