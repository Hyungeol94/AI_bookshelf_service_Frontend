import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const PopupHome = (props) => {  

  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  if (props.bookCount === 0) {
    return (
      <Modal isOpen={toggle} onRequestClose={toggle}>
        <ModalHeader className="justify-content-center">
          알림
          <Button
            className="btn-round btn-neutral btn-icon"
            onClick={toggle}
          >
            <i className="tim-icons icon-simple-remove" />
          </Button>
        </ModalHeader>
        <ModalBody>
          <p>내 서재에 저장된 책이 없습니다!</p>
          <p>지금 바로 서재 사진을 업로드해보세요!</p>

          <Link to="/Upload">
            <Button>
              서재 사진 업로드 바로가기
            </Button>
          </Link>

        </ModalBody>
      </Modal>
    );
  }

  return null;
};

export default PopupHome;