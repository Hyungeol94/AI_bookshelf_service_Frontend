// src/routes/Detail.js


import React from "react";
import DetailPage from "../pages/Detail";
import Navigator from "../components/Navigator";

class Detail extends React.Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false});
        }, 600);
    }

    render() {
        return (
            <div>
                <Navigator />
                {this.state.isLoading ? <h1> "Loading..." </h1> : <DetailPage/>}
                <h1> 상세정보 </h1>
            </div>
        );
    }
}

export default DetailPage;