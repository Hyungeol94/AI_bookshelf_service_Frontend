import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// our component
import sample_user from "../assets/sample_user.json";

const Userprofile = () => {
  console.log(sample_user);
  console.log('함수 실행 여부 확인');
  return(
    <div className='MyProfile'>
      <h2>My profile</h2>
      
      <div>
      <img
        src={sample_user.profile.image}
        style={{ width: "80px", height: "80px"}}
      />
      <h3>{sample_user.profile.user_nickname}</h3>
      <Link to="/Upload">
          <button>내 정보 수정하기</button>
      </Link> 
      </div>

      <Link to="/Upload">
          <button>서재에 책 추가하기</button>
      </Link> 
      <div className='user_book'>
      <h4>내 서재에 저장된 책: {sample_user.user_bookshelf.book_id.length}권</h4>
      <h4>좋아하는 책: {sample_user.user_like_book.length}권</h4>
      <h4>찜해둔 책: {sample_user.user_interest.length}권</h4>
      <h4>저장한 책: {sample_user.user_cart.length}권</h4>
      </div>
    </div>
  )
}

export default Userprofile;