import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const BookshelfImageModal = (props) => { 
    const {bookshelfImages, modalIsOpen, openBookshelfImage} = props
    const {className} = props;

    return (
        <Modal isOpen={modalIsOpen} toggle={openBookshelfImage}>
            <ModalHeader toggle={openBookshelfImage}>
               <h3 className= 'modal-title' style = {{color: 'black'}}>내 서재 </h3>
            </ModalHeader>
            <ModalBody>
                    <div>붉은 색으로 표시된 부분이 책으로 인식되었습니다.</div>
                    <div>누락된 도서는 도서 검색을 통해 직접 추가할 수 있습니다. </div>
                    {Array.isArray(bookshelfImages)? (
                        bookshelfImages.map((bookshelfImage, index) => (                
                            <img key={index} src={bookshelfImage} alt={`Bookshelf Image ${index}`} />                            
                        ))
                    ):(
                    <p>No bookshelf images found.</p>
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