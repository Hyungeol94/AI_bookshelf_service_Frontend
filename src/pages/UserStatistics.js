import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json"; // << 통계정보로 바꿔야됨
import getlist from "../components/GetList";

const Stats = (props) => (
  <div>
    <div>
      <img src={props.image} 
      alt={props.statstitle} 
      width={300} 
      height={300}
      style = {{marginRight : "10px"}}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

// stats 이미지와 제목, 설명 표시, 가장 많이 읽은 책과 장르, 총 권수 등
function trim(books_info, includeCount){
  let res = []
  for (let i =0;i<books_info.length;i++){
    if (books_info[i].id <= includeCount){
      res.push(books_info[i])
    }
  }
  return res
}

function get_recentlyAdded_list(books_info){ 
  const includeCount = 3;
  let res = trim(books_info, includeCount)
  return getlist(res)
}

function get_likes_list(books_info){
  return getlist(books_info) //이후 수정 필요
}

const UserBookShelf = () => {
  let [recentlyAdded_count, recentlyAdded_list] = get_recentlyAdded_list(sample);
  let [totalBook_count, totalBook_list] = getlist(sample);
  let [likes_count, Likes_list] = get_likes_list(sample);

  return (
    <div>
      <h1>나의 서재</h1>      
      <h2>최근 추가한 항목({recentlyAdded_count}개)</h2>      
      {recentlyAdded_list}
      <h2>전체 보기 (총 {totalBook_count}개)</h2>      
      {totalBook_list}
      <h2>좋아요({likes_count}개)</h2>
      {Likes_list}
    </div>
  );
};

export default UserBookShelf;