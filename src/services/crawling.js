// import axios from 'axios';
const axios = require('axios')
const cheerio = require('cheerio')
// import cheerio from 'cheerio';
// import mongoose from 'mongoose';
// import Book from "../../models/BookModel.js";
// import User from "../../models/BookModel.js";

const log = console.log;


// async function findlink() {
//   try {
//     // 특정 값으로 문서 찾기
//     const query = { fieldName: 'value' }; // 검색 조건

//     const documents = await Model.find(query);

//     console.log('Matching documents:', documents);
//   } catch (error) {
//     console.error('Error while finding documents:', error);
//   }
// }

// const Book = mongoose.model('Book', BookSchema);

// Book.find({}, 'link', (err, result) => {
//   if (err) {
//     console.error('Failed to fetch data from MongoDB:', err);
//     return;
//   }

//   console.log(result);
// });



// async function scrapeData(link) {
//   try {
//     const response = await axios.get(link); // HTTP GET 요청
//     const html = response.data; // 응답으로 받은 HTML 데이터

    
//     const $ = cheerio.load(html.data);
    
//     const category_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5');
//     const category = category_data.text();
    
//     const page_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)');
//     const page = page_data.text().slice(0, -1);  // 쪽 삭제
    

//     const weight_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)');
//     const weight = weight_data.text().slice(0, -1);  // g 삭제

//     // 크롤링한 데이터 반환
//     return {
//      ht,
//     };
//   } catch (error) {
//     console.error('Error while scraping data:', error);
//     return null;
//   }
// }


// const Model = mongoose.model('Model', Schema); // 저장할 파일

// async function updateDocument(url) {
//   try {
//     // 크롤링 로직 실행하여 데이터 가져오기
//     const crawledData = await scrapeData(url);

//     if (!crawledData) {
//       throw new Error('Failed to scrape data');
//     }

//     // MongoDB에서 해당 문서 찾고 업데이트
//     const filter = { url: url }; // 검색 조건
//     const update = { $set: crawledData }; // 업데이트할 데이터
//     const options = { new: true }; // 업데이트 후 업데이트된 문서 반환

//     const updatedDocument = await YourModel.findOneAndUpdate(filter, update, options);

//     console.log('Document updated:', updatedDocument);
//   } catch (error) {
//     console.error('Error while updating document:', error);
//   }
// }





// async function crawlAndUpdateData() {
//   try {
//     // MongoDB에서 URL 값을 기반으로 문서 검색
//     const documents = await Model.find({});

//     for (const document of documents) {
//       const url = document.url;

//       // 크롤링 로직 실행하여 데이터 가져오기
//       const crawledData = await scrapeData(url);

//       if (!crawledData) {
//         throw new Error('Failed to scrape data');
//       }

//       // MongoDB에서 해당 문서 업데이트
//       const filter = { url: url };
//       const update = { $set: crawledData };
//       const options = { new: true };

//       const updatedDocument = await Model.findOneAndUpdate(filter, update, options);

//       console.log('Document updated:', updatedDocument);
//     }
//   } catch (error) {
//     console.error('Error while crawling and updating data:', error);
//   }
// }


// crawlAndUpdateData()
//   .then(() => {
//     console.log('Crawling and updating data complete');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

  
  


  
 
  

  


//   async function saveDataToMongoDB(url) {
//     try {
//       // 크롤링 로직 실행하여 데이터 가져오기
//       const crawledData = await scrapeData(url);
  
//       if (!crawledData) {
//         throw new Error('Failed to scrape data');
//       }
  
//       // MongoDB에 데이터 저장
//       const newDocument = new Model(crawledData);
//       await newDocument.save();
  
//       console.log('Data saved to MongoDB:', newDocument);
//     } catch (error) {
//       console.error('Error while saving data to MongoDB:', error);
//     }
//   }



//   saveDataToMongoDB(url)
//   .then(() => {
//     console.log('Data saved to MongoDB');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });








  const getHtml = async () => {
    try {
      return await axios.get('https://search.shopping.naver.com/book/catalog/32483277683'); // 책의 link 입력
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const category_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(1) > div > div.bookBasicInfo_info_detail__I0Fx5');
    const category = category_data.text();
    return category;
  })
  .then((res) => log(res));

  getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const page_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(1)');
    const page = page_data.text().slice(0, -1);  // 쪽 삭제
    return page;
  })
  .then((res) => log(res));

  getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const weight_data = $('#book_section-info > div.bookBasicInfo_basic_info__HCWyr > ul > li:nth-child(2) > div > div.bookBasicInfo_info_detail__I0Fx5 > span:nth-child(2)');
    const weight = weight_data.text().slice(0, -1);  // g 삭제
    return weight;
  })
  .then((res) => log(res));

