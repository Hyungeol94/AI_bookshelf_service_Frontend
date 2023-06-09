import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <img src={props.image} alt={props.booktitle} width={30} height={30} />
      </div>
      <h3>제목 : {props.booktitle}</h3>
    </div>
  );
};
