import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList";
import get_likes_list from "../components/GetLikesList";
import get_recentlyAdded_list from "../components/GetRecentlyAddedList";
import get_saved_list from "../components/GetSavedList";


const Book = (props) => (
  <div>
    <div>
      <img src={props.image} 
      alt={props.booktitle} 
      width={80} 
      height={80}
      style = {{marginRight : "10px"}}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

const UserBookShelf = () => {
  let [recentlyAdded_count, recentlyAdded_list] = get_recentlyAdded_list(sample);
  let [totalBook_count, totalBook_list] = getlist(sample);
  let [likes_count, Likes_list] = get_likes_list(sample);
  let [saved_count, saved_list] = get_saved_list(sample);

  return (
    <div>
      <h1>나의 서재</h1>      
      <h2>최근 추가한 항목({recentlyAdded_count}개)</h2>      
      {recentlyAdded_list}
      <h2>전체 보기 (총 {totalBook_count}개)</h2>      
      {totalBook_list}
      <h2>좋아요({likes_count}개)</h2>
      {Likes_list}
      <h2>찜하기({saved_count}개)</h2>
      {saved_list}
    </div>
  );
};

export default UserBookShelf;