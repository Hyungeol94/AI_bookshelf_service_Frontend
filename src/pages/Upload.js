import React, { useRef, useState } from "react";
import "../styles/Upload.css";

const Upload = () => {
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const upload = useRef();

  const imgUpload = () => {
    console.log(upload.current.files);
    setImgFile((prev) => [...prev, URL.createObjectURL(upload.current.files[0])]);
  };

  const boximgUpload = () => {
    setImgFile((prev) => [...prev, URL.createObjectURL(upload.current.files[0])]);
  };

  const handleUpload = () => {
    if (imgFile.length === 0) {
      alert("No images appended."); // Display alert if no images are appended
    } else {
      // Perform the AI logic here
      //start the AI logic
      // ...
    }
  };

  return (
    <>
      <h1 className="head">책장 사진을 업로드해 주세요</h1>
      <h5 className="explain">정면에서 책장 사진을 찍어 업로드해 주세요.</h5>
      <h5 className="explain">인공지능이 책을 감지해 자동으로 내 서재를 만들어 줄 거에요.</h5>
     
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
            <>
                <div style={{ display: 'flex' }}>
                {imgFile?.map((img, idx) => (
                    <div key={idx} style={{ margin: '20px', border: '1px solid black' }}>
                    <img
                        style={{ width: '200px', height: '200px' }}
                        src={img}
                        alt="img"
                    />
                    </div>
                ))}
                </div>
                <input
                type="file"
                ref={upload}
                multiple
                onChange={boximgUpload}
                accept="image/*"                
            />
            </>
            
        )}
      </div>
      <button onClick={handleUpload} className="continueButton">계속하기</button>
    </>
  );
};

export default Upload;
