import { useState, useEffect } from 'react';

// import styled from 'styled-components';
// import { BOOKROOM_USER_API } from '../../config';

// our component
import sample_user from "../assets/sample_user.json";
import get_userlist from "../components/GetUserList";

// const UserProfile = () => {
//   const [userInfo, SetUserInfo] = useState([]);

//   useEffect(() => {
//     // fetch(`${BESTSELLER_API}&keyword=${keyword}`)
//     fetch(BOOKROOM_USER_API, {
//       headers: { Authorization: localStorage.getItem('token') },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         SetUserInfo(res.libraryInfo[0]);
//         // console.log(res.libraryInfo[0]);
//       })

//       .catch((err) => console.log('Catched errors!!', err));
//   }, []);
//   console.log(userInfo);
//   return (
//     <UserProfileContainer userInfoImage={userInfo && userInfo.libraryImage}>
//       <Profile>
//         <img src={userInfo.userImage} alt='userImage' />
//         <Title>{userInfo.libraryName}</Title>
//         <p>{userInfo.userName}</p>
//       </Profile>
//     </UserProfileContainer>
//   );
//  };

const UserProfile = () => {
    let [nick_name, user_img] = get_userlist(sample_user);
  
    return (
      <>
      <div>
            <img src="../src/assets/img/apple-icon copy.png" alt='userImage' />
            <p>최서연님의 온라인 서재</p>
      </div>
      </>
    );
  };

// const UserProfileContainer = styled.div`
//   width: 1280px;
//   height: 340px;
//   display: flex;
//   padding: 40px;
//   justify-content: left;
//   /* background-image: url('./images/bookRoomBanner.png'); */
//   background-image: ${(props) => props.userInfoImage};
//   background-size: 1280px 340px;
// `;

// const Profile = styled.div`
//   height: 100px;
//   img {
//     width: 75px;
//     height: 75px;
//     border-radius: 50%;
//   }
//   p {
//     font-size: 15px;
//   }
// `;

// const Title = styled.div`
//   height: 40px;
//   font-size: 30px;
//   font-weight: 600;
//   margin: 10px 0px;
// `;

export default UserProfile;