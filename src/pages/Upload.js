import React, { useRef, useState } from "react";

const Upload = () => {
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const upload = useRef();

  const imgUpload = () => {
    console.log(upload.current.files);
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
      <h1>서재 이미지 업로드</h1>
      <input
        type="file"
        ref={upload}
        multiple
        onChange={imgUpload}
        accept="image/*"
        style={{
          zIndex: '2',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
      />
      <h2>이미지 저장소</h2>
      {imgFile.length === 0 ? (
        <p>No images appended.</p>
      ) : (
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
      )}
      <button onClick={handleUpload}>서재 목록 만들기</button>
    </>
  );
};

export default Upload;
