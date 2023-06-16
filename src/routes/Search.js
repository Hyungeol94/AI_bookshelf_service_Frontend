import React from "react";
import Search from "../pages/Search";

// eslint-disable-next-line import/no-anonymous-default-export
class Searchpage extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <Search/>}
      </div>
    );
  }
}

export default Searchpage;
