import axios from "axios";

// const converter = require("xml-js");

// const BOOKINFO_APIKEY = process.env.REACT_APP_BOOKINFO_APIKEY;
// const BOOKINFO_APIKEY = 'f2671199c0a54a75884db863acdb6287397dba388499b9f6e4a5dcb64f29d503';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (searchvalue) => {
  // console.log(searchvalue, pageSize);
  const bookdata = await axios
    .get("/v1/search/book.json", {
      params: { query: searchvalue },
      headers: {
        "X-Naver-Client-Id": "aUTQs989GIJxwutcnHAk",
        "X-Naver-Client-Secret": "5iYHJDUjOd",
      },
    })
    .then((data) => {
      return data?.data;
    })
    .catch((e) => console.log(e));
  return bookdata;
  // console.log(bookdata);
};
