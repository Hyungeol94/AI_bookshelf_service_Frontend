import React from "react";
import getlist from "./GetList";

function trim(books_info, includeCount) {
  let res = [];
  for (let i = 0; i < books_info.length; i++) {
    if (books_info[i].id <= includeCount) {
      res.push(books_info[i]);
    }
  }
  return res;
}

export default function get_recentlyAdded_list(books_info) {
  const includeCount = 3;
  let res = trim(books_info, includeCount);
  // console.log(res)
  return getlist(res);
}
