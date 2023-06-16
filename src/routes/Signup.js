import React from "react";
import Signuppage from "../pages/SignUp";

// eslint-disable-next-line import/no-anonymous-default-export
class Signup extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <Signuppage/>}
      </div>
    );
  }
}

export default Signup;
