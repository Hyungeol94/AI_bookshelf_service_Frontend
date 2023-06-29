import React from "react";
import classnames from "classnames";
// reactstrap components

//our components
import user_info from "../assets/sample_user.json";
import sample from "../assets/sample_book.json";
import getlist from "./GetList_user";
import get_recentlyAdded_list from "./GetRecentlyAddedList";
import BookModal from "./BookModal"

import "../styles/Book-view.css";

import {
  TabContent,
  TabPane,
  Container,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

function Card({ children }) {
  return <div className="book-view-card">{children}</div>;
}

export default function Bookview(props) {
  // console.log(props.list);
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [filterText, setFilterText] = React.useState('');

  return (
    <>
      <Container
        className=""
        style={{ width: "1000px", padding: 0, ...props.style }}
      >
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
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-align-left-2" />
                  내 서재
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: iconTabs === 2,
                  })}
                  onClick={(e) => setIconsTabs(2)}
                  href="#pablo"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-heart-2" />
                  좋아하는 책
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: iconTabs === 3,
                  })}
                  onClick={(e) => setIconsTabs(3)}
                  href="#pablo"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-cart" />
                  찜해둔 책
                </NavLink>
              </NavItem>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input
                    className="book-view-search"
                    placeholder="제목으로 검색하기"
                    type="text"
                    name="searchKeyword"
                    filterText = {filterText}
                    value={filterText} 
                    onChange={(e) => setFilterText(e.target.value)} // 검색어 업데이트
                  />
                </FormGroup>
              </Form>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
              <TabPane tabId="link1">
                <p>
                  <h4> 총 {props?.bookshelflist?.length}권 </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap:'wrap',
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {props.bookshelflist
                    .filter((data) =>
                      data.title.toLowerCase().includes(filterText.toLowerCase())
                    )
                    .reverse()
                    .map((data) => (

                      <BookModal
                      key={data.id}
                      image={data.image}
                      booktitle={data.title}
                      author={data.author}
                      description={data.description}
                      id={data.id}
                    />

                    ))}
                  </div>
                </p>
              </TabPane>
              <TabPane tabId="link2">
                <p>
                  <h4> 총 {props?.likelist?.length}권 </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap:'wrap',
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {props?.likelist?.filter((data) =>
                      data.title.toLowerCase().includes(filterText.toLowerCase())
                    )
                    .reverse()
                    .map((data) => (

                      <BookModal
                      key={data.id}
                      image={data.image}
                      booktitle={data.title}
                      author={data.author}
                      description={data.description}
                      id={data.id}
                    />

                    ))}
                  </div>
                </p>
              </TabPane>
              <TabPane tabId="link3">
                <p>
                  <h4> 총 {props?.cartlist?.length}권 </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap:'wrap',
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {props?.cartlist?.filter((data) =>
                      data.title.toLowerCase().includes(filterText.toLowerCase())
                    )
                    .reverse()
                    .map((data) => (

                      <BookModal
                      key={data.id}
                      image={data.image}
                      booktitle={data.title}
                      author={data.author}
                      description={data.description}
                      id={data.id}
                    />

                    ))}
                  </div>
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = React.useState('');
  
  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        onFilterTextChange={setFilterText}/>
    </div>
  )
}


function SearchBar({
  filterText,
  onFilterTextChange,
}) {
  return (
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
  );
}

// { products, filterText}