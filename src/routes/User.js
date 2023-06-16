import React from "react";
import UserProfilePage from "../pages/Profile";

// eslint-disable-next-line import/no-anonymous-default-export
class UserProfile extends React.Component {
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
        {this.state.isLoading ? <h1>"Loading..."</h1> : <UserProfilePage />}
      </div>
    );
  }
}

export default UserProfile;
