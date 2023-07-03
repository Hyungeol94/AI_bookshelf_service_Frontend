import {Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Carousel, CarouselItem, 
    CarouselControl, CarouselIndicators} from "reactstrap";
import {useState} from 'react';
import "../../styles/Result.css";
    

const BookshelfImageModal = (props) => { 
    const {bookshelfImages, modalIsOpen, openBookshelfImage} = props
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === bookshelfImages.length - 1 ? activeIndex : activeIndex + 1;
        setActiveIndex(nextIndex);
      };
    
      const previous = () => {
        if (animating) return;
        const prevIndex = activeIndex === 0 ? 0 : activeIndex - 1;
        setActiveIndex(prevIndex);
      };
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      };
    
      const slides = bookshelfImages.map((image, index) => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={index}
          interval={false}
        >
          <img src={image} alt={`slide${index}`} style ={{maxHeight: '20%'}}/>
        </CarouselItem>
      ));

    return (
        <Modal isOpen={modalIsOpen} toggle={openBookshelfImage} className = "custom-modal-style">
            <ModalHeader toggle={openBookshelfImage}>
               <h3 className= 'modal-title' style = {{color: 'black'}}>내 서재 </h3>
            </ModalHeader>
            <ModalBody>
                    <div>붉은 색으로 표시된 부분이 책으로 인식되었습니다.</div>
                    <div>누락된 도서는 도서 검색을 통해 직접 추가할 수 있습니다. </div>
                    {Array.isArray(bookshelfImages)? (                        
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators items={bookshelfImages} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    ):(                        
                    <div>No bookshelf images found.</div>
                    )
                }
            </ModalBody>
            <ModalFooter>
                    <Button color="secondary" onClick={openBookshelfImage}>
                    닫기
                    </Button>        
            </ModalFooter>
        </Modal>  
    )
}

export default BookshelfImageModal;