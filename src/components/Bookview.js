import React from "react";
import classnames from "classnames";
// reactstrap components

//our components
import user_info from "../assets/sample_user.json"
import sample from "../assets/sample_book.json";
import getlist from "./GetList_user";
import get_recentlyAdded_list from "./GetRecentlyAddedList";

import "../styles/Book-view.css";

import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    Form,
    FormGroup,
    Input
  } from "reactstrap";

  
function Card({ children }) {
    return (
      <div className="book-view-card">
        {children}
      </div>
    );
  }


export default function Bookview(props) {

    // handleValueChange = (e) => {
    //     let nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     this.setState(nextState);
    // }

    // const filteredComponents = (data) => {
    //     data = data.filter((c) => {
    //         return c.name.indexOf(this.state.searchKeyword) > -1;
    //     } );
    //     return data.map((c) => {
    //         return <p> c.booktitle </p>
    //     });
    // }    

    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(4);
    const [searchTerm, setSearchTerm] = React.useState("");
    let [recentlyAdded_count, recentlyAdded_list] = get_recentlyAdded_list(sample);
    let [totalBook_count, totalBook_list] = getlist(sample, user_info.user_bookshelf.book_id);
    let [likes_count, Likes_list] = getlist(sample, user_info.user_like_book);
    let [saved_count, saved_list] = getlist(sample, user_info.user_cart);
      

    return (
            <>
            <Container className="" style={{width:'100%', padding:0, ...props.style}}>
                    <Card>
                        <CardHeader className="book-view-card-header">
                            <Nav className="nav-tabs-info" role="tablist" tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                        active: iconTabs === 1,
                                        })}
                                        onClick={(e) => setIconsTabs(1)}
                                        href="#pablo"
                                    >
                                        <i className="tim-icons icon-align-left-2" />
                                        전체보기
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                        active: iconTabs === 2,
                                        })}
                                        onClick={(e) => setIconsTabs(2)}
                                        href="#pablo"
                                    >
                                        <i className="tim-icons icon-calendar-60" />
                                        최근 추가 항목
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                        active: iconTabs === 3,
                                        })}
                                        onClick={(e) => setIconsTabs(3)}
                                        href="#pablo"
                                    >
                                        <i className="tim-icons icon-heart-2" />
                                        좋아하는 책
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                        active: iconTabs === 4,
                                        })}
                                        onClick={(e) => setIconsTabs(4)}
                                        href="#pablo"
                                    >
                                        <i className="tim-icons icon-cart" />
                                        찜해둔 책
                                    </NavLink>
                                </NavItem>  
                                <Form className="form-inline ml-auto">
                                    <FormGroup className="no-border">
                                    <Input 
                                        className="book-view-search"
                                        placeholder="제목으로 검색하기" type="text"
                                        name = "searchKeyword" 
                                        // value = {this.state.searchKeyword} 
                                        // onChange = {this.handleValueChange}
                                    />
                                    </FormGroup>
                                </Form>
                            </Nav>
                        </CardHeader>
                        <CardBody>
                            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                                <TabPane tabId="link1">
                                    <p>
                                    <h4> 총 {totalBook_count}권 </h4>      
                                    {totalBook_list}
                                    </p>
                                </TabPane>
                                <TabPane tabId="link2">
                                    <p>
                                    <h4> 총 {recentlyAdded_count}권 </h4>      
                                    {recentlyAdded_list}
                                    </p>
                                </TabPane>
                                <TabPane tabId="link3">
                                    <p>
                                    <h4> 총 {likes_count}권 </h4>
                                    {Likes_list}                        
                                    </p>
                                </TabPane>
                                <TabPane tabId="link4">
                                    <p>
                                    <h4> 총 {saved_count}권 </h4>
                                    {saved_list}                       
                                    </p>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                        </Card>
            </Container>
        </>
        );
    }