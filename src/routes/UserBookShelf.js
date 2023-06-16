import React from "react";
import UserBookShelfpage from "../pages/UserBookShelf";
import Detail from "../components/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
class UserBookShelf extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <UserBookShelfpage />}
      </div>
    );
  }
}

export default UserBookShelf;
