import React from "react";
import "../styles/BookList.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import ClampLines from "react-clamp-lines";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  // console.log(props);
  return (
    <div class="booklist">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "solid 2px",
          borderColor: "rgb(31 64 182 / 66%)",
          borderRadius: "15px",
          padding: "20px",
          // width: "1110px",
          marginTop: "10px",
        }}
      >
        <img
          src={
            props.image ||
            "/Users/edaumedo1/aivle0317/src/assets/img/sample_book.png"
          }
          alt={props.booktitle}
          width={120}
          height={160}
        />
        <div
          style={{
            marginLeft: "5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <h3 style={{ marginBottom: 0, fontSize: "18px" }}>
                {props?.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "5px",
                  fontWeight: 400,
                  position: "absolute",
                  // textAlign: "end",
                  right: 0,
                  bottom: 0,
                  margin: 0,
                }}
              >
                {props?.isbn}
              </p>
            </div>
            <div
              style={{
                marginTop: "5px",
                border: "1px solid #dddddd",
                borderColor: "rgb(31 64 182 / 75%)",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2px",
              }}
            >
              <p style={{ fontSize: "15px", fontWeight: 400 }}>
                {props?.author}
              </p>
              <p style={{ fontSize: "15px", fontWeight: 400 }}>
                {props?.publisher}
              </p>
            </div>
            <div
              style={{ width: "740px", fontWeight: "border", fontSize: "16px" }}
            >
              <ClampLines
                text={props?.description}
                lines={5}
                ellipsis="..."
                className="custom-class"
                innerElement="p"
                buttons={false}
              />
            </div>
          </div>
          <h4 style={{ marginBottom: 0, fontSize: "14px", textAlign: "end" }}>
            {String(props?.pubdate).slice(0, 4)}.
            {String(props?.pubdate).slice(4, 6)}.
            {String(props?.pubdate).slice(6, 8)}
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <div>{""}</div>
          <Link to={props?.link}>
            <Button>
              {Number(props?.discount).toLocaleString("ko-KR")} 원
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
