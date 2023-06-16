import React from "react";
// reactstrap components
import { Container, Button } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";

// our components
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList";
import get_likes_list from "../components/GetLikesList";
import get_recentlyAdded_list from "../components/GetRecentlyAddedList";
import get_saved_list from "../components/GetSavedList";
import user_profile from "../components/Profile";
import { useNavigate } from "react-router-dom"

// export default function DetailPage(props){
//   const navigate = useNavigate();

//   const onClickDetailItem = () {
//     navigate('/Detail.${props.title}',{
//       state: props
//     })
//   }
//   return (
//     <div className="book-container" onclick={onClickDetailItem}>
//       <img src={BOOK_IMG_URL + props.image} alt='book image'/>
//       <div className='book-info'>
//         <h4> {props.booktitle} </h4>
//         <span> {props.movie_detail} </span> {/* 수정해야됨 */}

//       </div>
//     </div>
//   )
// }

// const Book = (props) => (
//   <div>
//     <div>
//       <img src={props.image} 
//       alt={props.booktitle} 
//       width={80} 
//       height={80}
//       style = {{marginRight : "10px"}}
//       />
//     </div>
//     <h5>{props.booktitle}</h5>
//   </div>
// );
// <<< 이거 이용해서 클릭하면 넘어가게 해야하는데 어떻게 연결하는지를 모르겠다... 

const UserBookShelf = () => {
  let [recentlyAdded_count, recentlyAdded_list] = get_recentlyAdded_list(sample);
  let [totalBook_count, totalBook_list] = getlist(sample);
  let [likes_count, Likes_list] = get_likes_list(sample);
  let [saved_count, saved_list] = get_saved_list(sample);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <div className="main">
        <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h2 className="title">Mybrary</h2>
          <Link to="/Upload">
          <button>업로드</button>

          {/* <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt='userImage' />
            <p>최서연님의 온라인 서재</p>
          </div> */}

          </Link> 
          <h3>최근 추가한 항목({recentlyAdded_count}개)</h3>      
          {recentlyAdded_list}
          <h3>전체 보기 (총 {totalBook_count}개)</h3>      
          {totalBook_list}
          <h3> 좋아요 ({likes_count}개)</h3>
          {Likes_list}
          <h3>찜하기({saved_count}개)</h3>
          {saved_list}

        </Container>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default UserBookShelf;