import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import sample from "../assets/sample_book.json";
import bookinfo_api from "../services/bookinfo_api";
import "../styles/Result.css";
import BookSearchView from "../components/Result/BookSearchView.js"
import BookTableView from "../components/Result/BookTableView.js"
import BookDetailView from "../components/Result/BookDetailView.js"


import { Button, Modal, ModalHeader, 
          ModalBody, Carousel, CarouselItem, 
          CarouselControl, CarouselIndicators} from "reactstrap";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';


function Card({ children }) {
  return <div className="resultCard">{children}</div>;
}

function getBookshelfImage (jsonResult) { 
  // Check if jsonResult is provided and valid
  if (jsonResult) {
    try {
          const decodedResult = decodeURIComponent(jsonResult);   
          const parsedResult = JSON.parse(decodedResult);
          const encodedImages = parsedResult.segment_images
          const DecodedImages = []
          const contentType = "image/jpeg";

          Object.values(encodedImages).forEach(base64ImageString => {
            const byteCharacters = atob(base64ImageString);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {type: contentType});            
            const imageUrl = URL.createObjectURL(blob);
            DecodedImages.push(imageUrl)
          })

          return DecodedImages
        } catch (error){
          console.error("Invalid JSON format:", error);
        }
      }
    // Return an empty array if jsonResult is missing or invalid
  return [];
  }

function getBooksInfo (jsonResult) {
  // Check if jsonResult is provided and valid
  if (jsonResult) {
    try {
      const decodedResult = decodeURIComponent(jsonResult);   
      const parsedResult = JSON.parse(decodedResult);
      //setBookshelfImage(parsedResult.segment_images);               
      const titleData = parsedResult.data      
      const booksInfo = [];
      Object.keys(titleData).forEach((key) => {
        const bookInfo = {};
        bookInfo.id = key;
        bookInfo.title = titleData[key];
        booksInfo.push(bookInfo);
      });      

      return booksInfo;
    } catch (error) {
      console.error("Invalid JSON format:", error);
    }
  }
  
  // Return an empty array if jsonResult is missing or invalid
  return [];
}


const Result = () => {  
  const searchParams = new URLSearchParams(window.location.search);
  const jsonResult = searchParams.get('jsonResult'); 
  const [bookImageList, setBookImageList] = useState(getBookshelfImage(jsonResult))
  const [bookList, setBookList] = useState(getBooksInfo(jsonResult))
  const [selectedBookInfo, setSelectedBookInfo] = useState(bookList[0]);
  const [selectedBookRowInfo, setSelectedBookRowInfo] = useState(bookList[0]);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(bookList[0]?.title);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const onSearch = async () => {
    setIsLoading(true);
    const fetchedData = await bookinfo_api(searchValue, pageSize);
    if (typeof fetchedData !== "undefined" && fetchedData) {
      console.log(
        "search and setting data complete and here is the fetched data"
      );
      setData(fetchedData);
    } else {
      setData(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (data && typeof data !== "undefined") console.log("Updated data:", data);
  }, [data]);

    
  useEffect(() => {
    onSearch()
  }, [searchValue]);

  const addToBookList = (bookInfo) => {
    const newBookInfo = {...bookInfo}    
    newBookInfo.id = parseInt(bookList[bookList.length-1].id)+1
    const updatedBookList = bookList.concat(newBookInfo)
    setBookList(updatedBookList)    
    console.log(bookList)
  };  

  const deleteFromBookList = (bookInfo) => {    
    const updatedBookList = bookList.filter(item => item !== bookInfo)
    setBookList(updatedBookList)
  };

  // 모달 관련 (가이드라인)

  const images = [
    `${process.env.PUBLIC_URL}/assets/img/resultguide1.png`,
    `${process.env.PUBLIC_URL}/assets/img/resultguide2.png`,
    `${process.env.PUBLIC_URL}/assets/img/resultguide3.png`,
    `${process.env.PUBLIC_URL}/assets/img/resultguide4.png`
  ];
  

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images.map((image, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={image} alt={`slide${index}`} />
    </CarouselItem>
  ));
  


  return (
    <div style={{ display: "flex", marginTop: "70px", justifyContent: "center" }}>
      <Card>
        <BookTableView
          booksInfo={bookList}
          setSelectedBookInfo={setSelectedBookInfo}          
          selectedBookRowInfo={selectedBookRowInfo}
          setSelectedBookRowInfo = {setSelectedBookRowInfo}
          deleteFromBookList = {deleteFromBookList}
          searchValue = {searchValue}  
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          bookInfoAPI={bookinfo_api}
          bookshelfImages = {bookImageList}
        />
        ;
      </Card>
      <Card>
        <BookDetailView
          bookInfo = {selectedBookInfo}
          bookList = {bookList}
          setBookList = {setBookList}
          addToBookList = {addToBookList}          
          selectedBookRowInfo = {selectedBookRowInfo} 
          // 클릭되어 있는 텍스트 정보를 제공하기          
        />
      </Card>
      <Card>
        {/* 클릭되어 있는 텍스트의 검색 결과 가져 오기 */}
        <BookSearchView
          bookInfo={selectedBookInfo}
          setSelectedBookInfo={setSelectedBookInfo}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          data={data}
          setData={setData}
          selectedBookInfo = {selectedBookInfo}
          // selectedBookRowInfo = {selectedBookRowInfo}
          searchValue = {searchValue}    
        />
      </Card>
      <Button
        style={{
          height: "7%",
          width: "5%",
          position: "fixed",
          right: "20px",
          bottom: "20px",
          borderRadius: "20%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          background: "orange",}}
          onClick={() => setModalIsOpen(true)}>
  <LiveHelpIcon style={{ fontSize: "400%" }} />
</Button>

  <Modal isOpen={modalIsOpen} toggle={closeModal} size="xl" centered
      style={{"margin-top":"-250px"}}>
        <ModalHeader toggle={closeModal}><b style={{"font-size": "26px", borderRadius: "56px"}}>책 목록 편집 가이드</b></ModalHeader>
        <ModalBody style={{}}>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </ModalBody>
      </Modal>




    </div>
  );
}

export default Result;