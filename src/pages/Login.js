import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// 참고 페이지: https://ddeck.tistory.com/33
// 참고 페이지 2 (코드는 안봄): https://velog.io/@94lfnv/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// Please note that the provided code assumes you have a server running at 'http://49.50.162.189:4000' that handles the /auth/signin endpoint. Make sure the server is running and properly configured to handle the request.

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data의 변화가 있을 때마다 value 값 변경 후 useState
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
    
    // Sign up 버튼 이벤트
    // const onClickSignup = () => {
    //    navigate("/Signup")
    // }

    //페이지 렌더링후 가장 처음 호출되는 함수
    useEffect(() => {
        // axios.get('http://49.50.162.189:4000/auth/signin')
        // .then(res => console.log(res))
        // .catch()
    },
    []) // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가

    return(
        <div>
            <h1>Log in</h1>
            <div>
                <label htmlFor='input_id'> ID:  </label>
                <input type='text' name='input_id' value="ID (E-mail)" onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'> PW:  </label>
                <input type='text' name='input_pw' value="Password" onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}> Log in </button>
                <Link to="/Signup"><button> Sign up </button></Link>
                
            </div>
        </div>
    )
}

export default Login;
