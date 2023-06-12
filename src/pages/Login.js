import React, {useState, useEffect} from 'react';
import axios from 'axios';

// 참고 페이지: https://ddeck.tistory.com/33
// 참고 페이지 2 (코드는 안봄): https://velog.io/@94lfnv/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

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

    //페이지 렌더링후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('http://49.50.162.189:4000/auth/signin')
        .then(res => console.log(res))
        .catch()
    },
    []) // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'> ID:  </label>
                <input type='text' name='input_id' value="ID" onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'> PW:  </label>
                <input type='text' name='input_pw' value="Password" onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}> Login </button>
            </div>
        </div>
    )
}

export default Login;


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { signIn } from '../../store/actions/authActions'
// import { Redirect } from 'react-router-dom'
// import GoogleSignUp from './GoogleSignUp'

// class SignIn extends Component {
//   state = {
//     email: '',
//     password: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.signIn(this.state)
//   }

//   render() {
//        const { authError, auth } = this.props;
//           if (auth.uid) return <Redirect to='/files' /> 
//           return (
//               <div className="container center-align">
//                   <div class="divider"></div>
//                       <div class="section">
//                          <form className="white " onSubmit={this.handleSubmit}>
//                               <h5 className="grey-text text-darken-3">Sign In</h5>
//                                  <div className="input-field">
//                                     <label htmlFor="email">Email</label>
//                                          <input type="email" id='email' onChange={this.handleChange} />
//                                  </div>
//                                  <div className="input-field">
//                                     <label htmlFor="password">Password</label>
//                                          <input type="password" id='password' onChange={this.handleChange} />
//                                  </div>
//                                  <div className="input-field">
//                                       <button className="btn pink lighten-1 z-depth-0">Login</button>
//                                          <div className="center red-text">
//                                                { authError ? <p>{authError}</p> : null }
//                                         </div>
//                                  </div>
//                         </form>
//                       </div>
//                       <div class="divider"></div>
//                           <div class="section">
//                               <h5 className="grey-text text-darken-3">Or Sign In with your Google Account</h5>
//                                   <br/>
//                                   <br/>
//                                   <br/>
//                                   <GoogleSignUp/>
//                          </div>
//                       </div>
//           )
//  }}

// const mapStateToProps = (state) => {
//   return{
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)