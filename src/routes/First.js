import React from "react";
import Firstpage from "../pages/First";

// import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
class Home extends React.Component {
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
        {this.state.isLoading ? (
          <h1>"Loading..."</h1>
        ) : (
          <div>
            <Firstpage />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
