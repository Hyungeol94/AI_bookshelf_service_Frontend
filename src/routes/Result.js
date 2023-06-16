import React from "react";
import Result from "../pages/Result";

// eslint-disable-next-line import/no-anonymous-default-export
class Resultpage extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <Result/>}
      </div>
    );
  }
}

export default Resultpage;
