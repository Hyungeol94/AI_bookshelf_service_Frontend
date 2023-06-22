import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Button} from "reactstrap"

// our component
import sample_user from "../assets/sample_user.json";

const Userprofile = () => {
  console.log(sample_user);
  console.log('함수 실행 여부 확인');
  return(
      
    <div className='MyProfile' style={{display:'flex', justifyContent:'space-between', width:'1000px',
    paddingLeft:'10px',paddingRight:'10px'}}>
      <div style={{width:'1000px'}}>
      <h1>My profile</h1>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <img
            src={sample_user.profile.image}
            style={{ width: "130px", height: "130px"}}
            />
          <h2 style={{alignSelf:'center', height:'1px', marginLeft:'20px'}}>{sample_user.profile.user_nickname}</h2>
        </div>
        <div style={{display: 'block',alignSelf:'center',}}>
          <Link to="/EditProfile">
              <Button style={{width:'200px',display: 'block'}}>내 정보 수정하기</Button>
          </Link> 
          <Link to="/Upload">
              <Button style={{width:'200px',display: 'block'}}>서재에 책 추가하기</Button>
          </Link> 
        </div>
      </div>
      {/* <div className='user_book'>
      <h4>내 서재에 저장된 책: {sample_user.user_bookshelf.book_id.length}권</h4>
      <h4>좋아하는 책: {sample_user.user_like_book.length}권</h4>
      <h4>찜해둔 책: {sample_user.user_interest.length}권</h4>
      <h4>저장한 책: {sample_user.user_cart.length}권</h4> 
      </div> */}
    </div>
    </div>
            
  )
}

export default Userprofile;