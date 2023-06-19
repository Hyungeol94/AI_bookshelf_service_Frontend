import React, { useEffect, useState } from "react";
import sample from "../assets/sample_statistics.json";


// stats 이미지와 제목, 설명 표시, 가장 많이 읽은 책과 장르, 총 권수 등
// function UserStatistics() {
//   const [statistics, setStatistics] = useState([]);

//   return (
//     <div>
//       <h1>사용자 통계</h1>
//       {statistics.map((sample) => (
//         <div key={sample.id}>
//           <img src={sample.statsImage} alt={sample.statstitle} width={500} height={500} />
//           <h3>{sample.statstitle}</h3>
//           <h5>{sample.statsinfo}</h5>
//           <p>좋아하는 장르: {sample.FavoriteGenre}</p>
//           <p>읽은 책 수: {sample.BooksRead}</p>
//           {/* <link to="/index"><button>back to home</button></link> */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserStatistics;

const UserStats = (props) => {
  <div>
    <div className="user-stats">
    <img src = {props.image}
    alt = {props.statstitle}
    style = {{ width: "300px", height: "300px" }}/>
  </div>
  <h4> {props.stats} </h4>
  </div>
}

export default function getStats(stat) {
  return [
    stat.length,
    <div style={{ display: "flex", overflowX: "auto" }}>
      {books_info.map((stat) => (
        <Book
          key={stat.id}
          image={stat.image}
          statstitle={stat.statstitle}
          stats={stat.statsInfo}
          style={{ marginRight: "10px" }}
        />
      ))}
    </div>,
  ]
}