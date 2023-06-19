import axios from "axios";

// const converter = require("xml-js");

// const BOOKINFO_APIKEY = process.env.REACT_APP_BOOKINFO_APIKEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (searchvalue, pageSize) => {
  // console.log(searchvalue, pageSize);
  const bookdata = await axios.get(
    `https://openapi.naver.com/v1/search/book.json`,
    {
      params: {
        query: searchvalue,
      },
      headers: {
        "X-Naver-Client-Id": "qzS6rcHjJMirkfabDMnA",
        "X-Naver-Client-Secret": "CvtuPx9rng",
      },
    }
  );
  return bookdata;
  // console.log(bookdata);
};
