import React from "react";
import Loginpage from "../pages/Login";

const time = 0;

// eslint-disable-next-line import/no-anonymous-default-export
class Login extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, time);
  }

  render() {
    return (
      <div>{this.state.isLoading ? <h1>"Loading..."</h1> : <Loginpage />}</div>
    );
  }
}

export default Login;
