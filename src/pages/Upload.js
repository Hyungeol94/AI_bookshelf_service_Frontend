import React, { useRef, useState } from "react";
import "../styles/Upload.css";
import {
  // Link, Route, Routes,
  useNavigate,
} from "react-router-dom";
import axios from 'axios';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

const Upload = () => {
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const upload = useRef();
  axios.defaults.withCredentials = true;
  // const imgUpload = () => {
  //   console.log(upload.current.files);
  //   setImgFile((prev) => [...prev, URL.createObjectURL(upload.current.files[0])]);
  // };

  const boximgUpload = () => {
    setImgFile((prev) => [
      ...prev,
      URL.createObjectURL(upload.current.files[0]),
    ]);
  };
  const navigate = useNavigate();
  const handleUpload = () => {
    if (imgFile.length === 0) {
      alert("No images appended.");
    } else {
      console.log(imgFile)
      
      const formData = new FormData();
      imgFile.forEach((img) => formData.append("image", img))
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
      .then(fetch('https://4b18-35-196-15-218.ngrok-free.app/img2title/', {
        method: 'POST',
        headers:{
          'ngrok-skip-browswer-warning' : '69420',
          enctype: 'multipart/form-data'
        },
        body: formData
      })
        .then((response) => {
          if (response.ok) {
            // Image successfully uploaded
            console.log('Image uploaded!');
          } else {
            // Handle error case
            console.error('Image upload failed.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        }));


      // Perform the AI logic here
      // start the AI logic
      // ...

      // navigate("/result", { replace: true });
    }
  };

  return (
    <>
      <h1 className="head">책장 사진을 업로드해 주세요</h1>
      <h5 className="explain">정면에서 책장 사진을 찍어 업로드해 주세요.</h5>
      <h5 className="explain">
        인공지능이 책을 감지해 자동으로 내 서재를 만들어 줄 거에요.
      </h5>

      <div className="upload-box">
        {imgFile.length === 0 ? (
          <>
            <p>책장 이미지를 업로드해 주세요.</p>
            <input
              type="file"
              ref={upload}
              multiple
              onChange={boximgUpload}
              accept="image/*"
              value=""
            />
          </>
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              {imgFile?.map((img, idx) => (
                <Card key={idx} >
                  <img
                    style={{width: "192", height: "192px" }}
                    src={img}
                    alt="img"
                  />
                </Card>
              ))}
            </div>
            <input
              type="file"
              ref={upload}
              multiple
              onChange={boximgUpload}
              accept="image/*"
            />
          </div>
        )}
      </div>
      <button onClick={handleUpload} className="continueButton">
        계속하기
      </button>
    </>
  );
};

export default Upload;
