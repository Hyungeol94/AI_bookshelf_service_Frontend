import React, { useState } from "react";
import "../styles/components/AddBtns.css";
import { Button } from "reactstrap";

const Addtolib = (props) => {
    const [likeCheck, setLikeCheck] = useState(false); // 좋아요 변수
    const [wishListCheck, setWishListCheck] = useState(false); // 찜 변수
    const [cartCheck, setCartCheck] = useState(false); // 장바구니 변수

    const likeBtnEvent =()=>{ 
        if(likeCheck === false) {
          setLikeCheck(true)
        }else {
          setLikeCheck(false)
        }
      };
      // 찜 버튼 함수
      const wishListBtnEvent = () => {
        if (wishListCheck === false) {
          alert("찜하시겠습니까?"); // 찜 버튼에 얼럿 추가
          setWishListCheck(true);
        } else {
          alert("찜을 취소하시겠습니까?"); // 찜 버튼 해제 시 얼럿 추가
          setWishListCheck(false);
        }
      };
      // 장바구니 버튼 함수
      const cartBtnEvent = () => {
        if (cartCheck === false) {
          alert("장바구니에 넣으시겠습니까?"); // 장바구니 버튼에 얼럿 추가
          setCartCheck(true);
        } else {
          alert("장바구니에서 제거하시겠습니까?"); // 장바구니 버튼 해제 시 얼럿 추가
          setCartCheck(false);
        }
      };
    
      // 서재에 추가 함수 <<< 백엔드 연결할 때 수정 필요함
      const addToLibrary = async (id) => {
        try {
          const response = await fetch("/api/add-to-library", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });
          const result = await response.json();
          if (result.success) {
            alert("내 서재에 추가되었습니다.");
          } else {
            alert("내 서재에 추가하는데 실패하였습니다.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
      // 서재에서 삭제 함수
      const removeFromLibrary = async (id) => {
        try {
          const response = await fetch("/api/remove-from-library", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });
          const result = await response.json();
          if (result.success) {
            alert("내 서재에서 삭제되었습니다.");
          } else {
            alert("내 서재에서 삭제하는데 실패하였습니다.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

return( <div>
    <div className="add-to-mybrary">
          <input type="checkbox" onChange={(e) => {if (e.target.checked) 
                                        {addToLibrary(props.id);} 
                                        else {removeFromLibrary(props.id);}}}
                                        className="input-box"/>
                                        <label className="labels">내 서재에 추가</label>
          <input type="checkbox" 
                  checked={ likeCheck } 
                  onChange={ likeBtnEvent }
                  className="input-box"/><label> 좋아요 </label>
        </div>
        <div className="like-wishlist-cart">
          <input type="checkbox"  
          checked={ wishListCheck } 
          onChange={ wishListBtnEvent }
          className="input-box" /><label className="labels"> 찜 </label>
          <input type="checkbox" 
          checked={ cartCheck } 
          onChange={ cartBtnEvent }
          className="input-box"/><label> 장바구니 </label>
        </div>
        <div className="btn-group">
          <card></card>
          <Button color="info" size="sm" className="buy-link" // style={{width: "100px", height:"30px", "border-radious": "5px"}}
              onClick={() => window.open(`https://search.shopping.naver.com/book/search?bookTabType=ALL&pageIndex=1&pageSize=40&query=${props.booktitle}&sort=REL`, "_blank")} >
                네이버 북 </Button>
          <Button color="info" size="sm" className="buy-link" // style={{width: "100px", height:"30px", "border-radious": "5px"}}
              onClick={() => window.open(`https://www.yes24.com/Product/Search?domain=ALL&query=${props.booktitle}`, "_blank")} >
                Yes24 </Button>
          <Button color="info" size="sm" className="buy-link"
              onClick={() => window.open(`https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${props.booktitle}`, "_blank")} > 
              알라딘 </Button>
          <Button color="info" size="sm" className="buy-link"
              onClick={() => window.open(`https://search.kyobobook.co.kr/search?keyword=${props.booktitle}`, "_blank")} > 
              교보문고 </Button> <br/>
        </div>
</div>

    
);
};
export default Addtolib
