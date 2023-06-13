import React from "react";
import Loginpage from "../pages/Login";

// eslint-disable-next-line import/no-anonymous-default-export
class Login extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 600);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>"Loading..."</h1> : <Loginpage/>}
      </div>
    );
  }
}

export default Login;
