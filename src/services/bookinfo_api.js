import axios from "axios";
const converter = require("xml-js");

const BOOKINFO_APIKEY =
  "f2671199c0a54a75884db863acdb6287397dba388499b9f6e4a5dcb64f29d503";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (searchvalue, pageSize) => {
  // console.log(searchvalue, pageSize);
  const bookdata = await axios
    .get(`https://nl.go.kr/NL/search/openApi/search.do`, {
      params: {
        key: BOOKINFO_APIKEY,
        kwd: searchvalue,
        pageSize: pageSize || 10,
      },
    })
    .then((data) => JSON.parse(converter.xml2json(data.data)))
    .then((data) => data.elements[0].elements[1].elements);
  return bookdata;
  // console.log(bookdata);
};
