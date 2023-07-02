import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const BookshelfImageModal = (props) => { 
    const {bookshelfImages, modalIsOpen, openBookshelfImage} = props

    return (
        <Modal isOpen={modalIsOpen} toggle={openBookshelfImage}>
            <ModalHeader>내 서재 이미지</ModalHeader>
                <ModalBody>
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
                    Cancel
                    </Button>        
            </ModalFooter>
        </Modal>  
    )
}

export default BookshelfImageModal;