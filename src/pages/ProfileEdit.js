import React, { useState, useRef, Avatar } from 'react';
import user_info from "../assets/sample_user.json"

// reactstrap components
import { Button } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";


const UserEditPage = () => {
  const [user, setUser] = useState(user_info);

  const [nickname, setNickname] = useState(user.profile.user_nickname);
  const [image, setImage] = useState(user.profile.image);

  const fileInput = useRef();
  
  const onChange = (e) => {
	if(e.target.files[0]){
            setImage(e.target.files[0])
        }else{ //업로드 취소할 시
            setImage(image)
            //return
        }
	//화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유저 정보 업데이트
    const updatedUser = { ...user };
    updatedUser.profile.user_nickname = nickname;
    updatedUser.profile.image = image;

    // TODO: 업데이트된 유저 정보를 서버로 전송
    setUser(updatedUser);
    console.log("유저 정보 업데이트 완료:", updatedUser);
  };

  return (
    <>
        <div className='wrapper'>
        <div className="main">
        {/* <div className="section section-basic" id="basic-elements"> */}
        <img alt="..." className="path" src={require("assets/img/path1.png")} />

        <div className="section section-basic" id="basic-elements">

          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection : 'column',
            marginTop: "4em",
            width: "100%",
          }}>
            <div style={{
              padding: "10px 0px 20px 0px"
            }}>
            <h2 style={{fontWeight: 'bold'}}>회원정보 수정하기</h2>
            </div>

            <form onSubmit={handleSubmit}
            style={{justifyContent: "center"}}>

                  <div>
                    <div style={{paddingRight:'10px'}}>
                      <label htmlFor="nickname" 
                      style={{
                        color: '#ffffff',
                        fontWeight:'bold',
                        fontSize:'1.5em'}}>닉네임</label>
                    </div>
                  <input type="text" id="nickname" value={nickname} onChange={handleNicknameChange}
                  style={{
                    height:'40px',
                    width:'250px'}} />
                  </div>

                  <div style={{marginTop:'8vh'}}>
                    <div> 
                      <label htmlFor="profile_img"
                        style={{
                          color: '#ffffff',
                          fontWeight:'bold',
                          fontSize:'1.5em'}}>프로필 이미지 변경</label>
                    </div>
                  <img 
                      src={image}
                      style={{ width: "200px", height: "200px", margin:'10px'}} 
                      size={200} 
                      onClick={()=>{fileInput.current.click()}}/>
                  <input 
                      type='file' 
                      style={{display:'none'}}
                      accept='image/jpg,impge/png,image/jpeg' 
                      name='profile_img'
                      onChange={onChange}
                      ref={fileInput}/>
                  </div>
                  
                  <div style={{
                    paddingTop: '40px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection : 'column',
                  }}>
                  <Button type="submit" onClick={()=>alert("저장되었습니다!")}
                  style={{
                    width:'20vw',
                    height: '5vh',
                    borderRadius: '10px 10px 10px 10px',
                    fontWeight:'bold'
                    }}> 저장 </Button>

                  </div>
            </form>
          </div>
        
        </div>

        </div>
        </div>
        {/* <Footer/> */}
    </>
  );
};

export default UserEditPage;
