import React, { useRef, useState, useEffect } from "react";
import "../styles/Upload.css";
import {
  // Link, Route, Routes,
  useNavigate,
} from "react-router-dom";
import {
  Button,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import axios from 'axios';

//import https from 'https';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

const Upload = () => {
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const [imgFileView, setImgFileView] = useState([])
  const upload = useRef();    
  
  const boximgUpload = () => {
    setImgFile((prev) => [
      ...prev,
      upload.current.files[0],
    ]);

    setImgFileView((prev)=>[
      ...prev,
      URL.createObjectURL(upload.current.files[0]),
    ])
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
      .then(fetch('https://69dd-34-139-206-56.ngrok-free.app/img2title/', {
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
            var jsonObject = response.json()            
            jsonObject.then((result) => {    
              console.log("uploaded object:", result)                        
              const jsonresult = encodeURIComponent(JSON.stringify(result))              
              navigate(`/result?jsonResult=${encodeURIComponent(jsonresult)}`, { replace: true })
            })        
          } else {
            // Handle error case
            console.error('Image upload failed.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        }))

      // Perform the AI logic here
      // start the AI logic
      // ... 

      //.then(navigate(`/result?jsonResult=${encodeURIComponent(JSON.stringify(jsonResult))}`, { replace: true }));       
    }
  };

  return (
    <>
    <div className="invisible"/>
      <h1 className="head">책장 사진을 업로드해 주세요</h1>
      <h3 className="explain">
        정면에서 책장 사진을 찍어 업로드해 주세요.<br/>
      인공지능이 책을 감지해 자동으로 내 서재를 만들어 줄 거에요.
      </h3>

      <div className="upload-box">
        {imgFileView.length === 0 ? (
          <>
            <p>책장 이미지를 업로드해 주세요.</p>
            <label for="file">
            <input
              type="file"
              ref={upload}
              multiple
              onChange={boximgUpload}
              accept="image/*"
              value=""
              className="input-box"
            />
            </label>
          </>
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              {imgFileView?.map((img, idx) => (
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
      <Button onClick={handleUpload} className="continueButton">
        계속하기
      </Button>
    </>
  );
};

export default Upload;
