import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// 참고 페이지: https://ddeck.tistory.com/33
// 참고 페이지 2 (코드는 안봄): https://velog.io/@94lfnv/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// Please note that the provided code assumes you have a server running at 'http://49.50.162.189:4000' that handles the /auth/signin endpoint. Make sure the server is running and properly configured to handle the request.

function TermsofService() {

    return(
        <div>
            <h1>Terms of Service</h1>
            <div>
                <p> Terms 1 </p>
            </div>
            <div>
                Terms 2
            </div>
            <div>
                <Link to="/Signup"><button> 닫기 </button></Link>
                
            </div>
        </div>
    )
}

// react modal 창 (검색해서 알아보기) <<< 

export default TermsofService;
