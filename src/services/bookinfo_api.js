import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors'

let itemslist = '';
// const converter = require("xml-js");

// const BOOKINFO_APIKEY = process.env.REACT_APP_BOOKINFO_APIKEY;
// const BOOKINFO_APIKEY = 'f2671199c0a54a75884db863acdb6287397dba388499b9f6e4a5dcb64f29d503';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (searchvalue) => {
  // console.log(searchvalue, pageSize);

  const getHtml = async (link, i) => {
    try {
      console.log(3333,link.slice(33))
      // https://search.shopping.naver.com
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: link.slice(33),
        // responseType: 'json',
        headers: {
          // 'Access-Control-Allow-Origin' : '*',
        }
      };

      const output = await axios.request(config)
        .then((data)=>{
          //애초에 여기로 안들어오는 문제 해결해야됨
          // console.log(JSON.stringify(data.data));
          console.log(4444,data?.data);
          const $ = cheerio.load(data?.data);

          const category_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5');
          const page_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)');
          const weight_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)');

          itemslist.items[i].category = category_data?.text();
          itemslist.items[i].page = page_data?.text().slice(0, -1);  // 쪽 삭제
          itemslist.items[i].weight =  weight_data?.text().slice(0, -1);  // g 삭제
          // return data
        })
        .catch((e)=>{
          console.log(5555,e)
        });
      return output; // 책의 link 입력
    } catch (error) {
      console.error(error);
    }
  };

  const bookdata = await axios
    .get("/v1/search/book.json", {
      params: { query: searchvalue },
      headers: {
        "X-Naver-Client-Id": "aUTQs989GIJxwutcnHAk",
        "X-Naver-Client-Secret": "5iYHJDUjOd",
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }, 
    })
    .then(async (data) => {
      return data?.data; //res_itemslist
    })
    .catch((e) => console.log(e));


  // console.log(bookdata)

  const output = async (bookdata)=>{
    
    // const itemslist = bookdata
    itemslist = bookdata;
    for(
      let i =0; 
      i< itemslist?.items.length;
      i++
      ){ 
      // setTimeout(() => {
        getHtml(itemslist?.items[i]?.link, i);
        // console.log(1111,data);

        // const $ = cheerio.load(data?.data);

        // const category_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5');
        // const page_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)');
        // const weight_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)');

        // itemslist.items[i].category = category_data?.text();
        // itemslist.items[i].page = page_data?.text().slice(0, -1);  // 쪽 삭제
        // itemslist.items[i].weight =  weight_data?.text().slice(0, -1);  // g 삭제


        // console.log(itemslist?.items[i])
      //  }, 500*(i+1));
        // const data = await getHtml(itemslist?.items[i]?.link);

      //.then(async (data)=>{
        // console.log(1111,data);

        // const $ = await cheerio.load(data?.data);

        // const category_data = await $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5');
        // const page_data = await $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)');
        // const weight_data = await $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)');

        // itemslist.items[i].category = category_data?.text();
        // itemslist.items[i].page = page_data?.text().slice(0, -1);  // 쪽 삭제
        // itemslist.items[i].weight =  weight_data?.text().slice(0, -1);  // g 삭제


        // console.log(itemslist?.items[i])
        // return bookdata
      //})
      //.catch((e)=>console.log(e))
  }
  return itemslist
  
}

  console.log(bookdata)

  return output(bookdata);
  // console.log(bookdata);
};
