/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { TailSpin } from "react-loader-spinner";
import { Modal, Button } from "reactstrap";
import "../styles/Upload.css";
import uploadGuidelines from "../assets/img/upload-guidelines.png";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

const Upload = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const upload = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수
  const [imgFileView, setImgFileView] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imgFile, setImgFile] = useState([]); // 이미지 배열

  const boximgUpload = () => {
    setImgFile((prev) => [...prev, upload.current.files[0]]);
    setImgFileView((prev) => [
      ...prev,
      URL.createObjectURL(upload.current.files[0]),
    ]);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const removeImage = (index) => {
    setImgFile((prevImages) => prevImages.filter((_, idx) => idx !== index));
    setImgFileView((prevImages) =>
      prevImages.filter((_, idx) => idx !== index)
    );
  };

  const handleUpload = () => {
    if (imgFile.length === 0) {
      alert("No images appended.");
    } else {
      console.log(imgFile);

      imgFile.forEach((img) => formData.append("image", img));
      const conversionPromises = imgFile.map((img) =>
        fetch(img)
          .then((response) => response.blob())
          .then((blob) => {
            formData.append("image", blob);
          })
      );

      Promise.all(conversionPromises)
        .then(() => {
          // Iterate over the FormData entries to verify the contents
          for (const [name, value] of formData.entries()) {
            console.log(`Name: ${name}, Value: ${value}`);
          }

          // Proceed with sending the FormData or performing further operations
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      Promise.all(conversionPromises)
        .then(setIsLoading(true))
        .then(
          fetch("http://49.50.162.36:8000/img2title/", {
            method: "POST",
            headers: {
              "ngrok-skip-browswer-warning": "69420",
              enctype: "multipart/form-data",
            },
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                // Image successfully uploaded
                console.log("Image uploaded!");
                let jsonObject = response.json();
                jsonObject.then((result) => {
                  console.log("uploaded object:", result);
                  const jsonresult = encodeURIComponent(JSON.stringify(result));
                  navigate(`/result?jsonResult=${jsonresult}`, {
                    replace: true,
                  });
                });
              } else {
                // Handle error case
                console.error("Image upload failed.");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            })
        );
    }
  };

  return (
    <>
      <div className="invisible" />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TailSpin color="#fff" height={100} width={100} />
        </div>
      ) : (
        <h1 className="head">책장 사진을 업로드해 주세요</h1>
      )}
      {isLoading ? (
        <h3 className="explain">
          인공지능이 책장에서 책을 감지하고 있어요.
          <br />책 한 권당 약 2초의 시간이 소요돼요.
        </h3>
      ) : (
        <div>
          <h3 className="explain">
            정면에서 책장 사진을 찍어 업로드해 주세요.
            <br />
            인공지능이 책을 감지해 자동으로 내 서재를 만들어 줄 거에요.
          </h3>
          <h4 className="explain">
            {" "}
            각 이미지당 최대 10Mb, 총 10장까지 업로드 가능합니다.{" "}
          </h4>
        </div>
      )}
      <div className="guide-photos-container">
        <Button className="guide-btn" onClick={openModal}>
          책장 사진 가이드 보기
        </Button>
        <Modal
          size="lg"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-container"
        >
          <img
            src={uploadGuidelines}
            onClick={closeModal}
            className="guide-photo"
          />
        </Modal>
      </div>

      <div className="upload-box">
        {imgFileView.length === 0 ? (
          <>
            <h3 className="upload-description">
              책장 이미지를 업로드해 주세요.
            </h3>
            <div className="upload-btn-group">
              <Button className="upload-btn">
                <input
                  type="file"
                  ref={upload}
                  multiple
                  onChange={boximgUpload}
                  accept="image/*"
                  className="upload-btn-inside"
                />
                사진 선택
              </Button>
              <h4 className="upload-btn-description">
                {" "}
                현재 업로드된 이미지 ({imgFileView.length})개{" "}
              </h4>
            </div>
          </>
        ) : (
          <div>
            <div className="img-view">
              {imgFileView?.map((img, idx) => (
                <Card key={idx}>
                  <div className="inside-card">
                    <img className="card-img" src={img} alt="img" />
                    <button
                      className="delete-circle"
                      onClick={() => removeImage(idx)}
                    >
                      <DeleteOutlinedIcon className="delete-icon" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="upload-btn-group">
              <Button className="upload-btn">
                <input
                  type="file"
                  ref={upload}
                  multiple
                  onChange={boximgUpload}
                  accept="image/*"
                  className="upload-btn-inside"
                />
                사진 선택
              </Button>
              <h4 className="upload-btn-description">
                {" "}
                현재 업로드된 이미지 ({imgFileView.length})개{" "}
              </h4>
            </div>
          </div>
        )}
      </div>
      <div className="cont-del-btn-group">
        <Button
          onClick={() => window.history.back()}
          className="continueButton"
        >
          취소
        </Button>
        <Button onClick={handleUpload} className="continueButton">
          계속하기
        </Button>
      </div>
    </>
  );
};

export default Upload;
