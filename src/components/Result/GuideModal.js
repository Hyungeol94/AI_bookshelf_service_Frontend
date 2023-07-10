/* eslint-disable import/no-anonymous-default-export */
import {
  Modal,
  ModalHeader,
  ModalBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useState } from "react";
import "../../styles/Result.css";
import resultguide1 from "../../assets/img/resultguide1.png";
import resultguide2 from "../../assets/img/resultguide2.png";
import resultguide3 from "../../assets/img/resultguide3.png";
import resultguide4 from "../../assets/img/resultguide4.png";

export default (props) => {
  // 모달 관련 (가이드라인)
  const { modalIsOpen, setModalIsOpen } = props;
  const images = [resultguide1, resultguide2, resultguide3, resultguide4];

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
    <Modal
      isOpen={modalIsOpen}
      toggle={closeModal}
      size="lg"
      centered
      style={{ "margin-top": "-250px" }}
    >
      <ModalHeader toggle={closeModal}>
        <b style={{ "font-size": "26px", borderRadius: "56px" }}>
          책 목록 편집 가이드
        </b>
      </ModalHeader>
      <ModalBody style={{}}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </ModalBody>
    </Modal>
  );
};
