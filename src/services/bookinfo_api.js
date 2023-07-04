import axios from "axios";
import cheerio from "cheerio";

// home에서는 정보가 많이 필요 없어서 30개만 부르는 걸로 호출 -> 크롤링 낭비 최소화

// eslint-disable-next-line import/no-anonymous-default-export
export default async (searchvalue, datasize = 15) => {
  let itemslist = "";

  const getHtml = async (link, i) => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: link.slice(33),
      };

      const output = await axios
        .request(config)
        .then((data) => {
          //애초에 여기로 안들어오는 문제 해결해야됨
          const $ = cheerio.load(data?.data);

          const category_data = $(
            "#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5"
          );
          const page_data = $(
            "#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)"
          );
          const weight_data = $(
            "#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)"
          );

          itemslist.items[i].category = category_data?.text();
          itemslist.items[i].page = page_data?.text().slice(0, -1); // 쪽 삭제
          itemslist.items[i].weight = weight_data?.text().slice(0, -1); // g 삭제
        })
        .catch((e) => {
          console.log("bookinfo_api_error", e);
        });
      return output; // 책의 link 입력
    } catch (error) {
      console.error(error);
    }
  };

  const bookdata = await axios
    .get("/v1/search/book.json", {
      params: { query: searchvalue, display: datasize },
      headers: {
        "X-Naver-Client-Id": "aUTQs989GIJxwutcnHAk",
        "X-Naver-Client-Secret": "5iYHJDUjOd",
      },
    })
    .then(async (data) => {
      return data?.data; //res_itemslist
    })
    .catch((e) => console.log(e));

  const output = async (bookdata) => {
    itemslist = bookdata;
    for (let i = 0; i < itemslist?.items.length; i++) {
      getHtml(itemslist?.items[i]?.link, i);
    }
    return itemslist;
  };

  return output(bookdata);
};
