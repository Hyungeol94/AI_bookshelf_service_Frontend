import React, { useEffect, useState } from 'react';
import stat from '../assets/sample_statistics.json';

const StatShow = () => {
  const [bookStatsData, setBookStatsData] = useState(null);

  useEffect(() => {
    // JSON 파일 데이터를 불러옵니다.
    setBookStatsData(stat);
  }, []);

  if (!bookStatsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book Stats</h1>
      <div>
        <img src={bookStatsData.image} alt="Book Stats" style = {{
        width: "300px"}}/>
      </div>
      <h3>title: {bookStatsData.statsTitle}</h3>
      <p>info: {bookStatsData.statsInfo}</p>
      <p>Favorite Genre: {bookStatsData.favoriteGenre}</p>
      <p>Books Read: {bookStatsData.booksRead}</p>
    </div>
  );
};

export default StatShow;
