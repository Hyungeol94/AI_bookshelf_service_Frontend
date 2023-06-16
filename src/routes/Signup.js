import React from "react";
import Signup from "../pages/Signup";

// eslint-disable-next-line import/no-anonymous-default-export
class Signuppage extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <Signup/>}
      </div>
    );
  }
}

export default Signuppage;
