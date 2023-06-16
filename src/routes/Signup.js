import React from "react";
import SignUpPage from "../pages/Signup";

// eslint-disable-next-line import/no-anonymous-default-export
class SignUpPage extends React.Component {
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

export default SignUpPage;
