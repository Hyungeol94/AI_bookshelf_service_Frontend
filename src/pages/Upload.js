import React from "react";
import { useRef, useState } from 'react';

const Upload = () => {
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const upload = useRef(); 

  const imgUpload = () => {
    console.log(upload.current.files);
    setImgFile(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
  };

  return (
    <>
      {' '}
      <h1>image upload</h1>
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
      <div style={{ display: 'flex' }}>
        {imgFile?.map((img, idx) => (
          <div key={idx} style={{ margin: '20px', border: '1px solid black' }}>
            <img
              style={{ width: '200px', height: '200px ' }}
              src={img}
              alt="img"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Upload;
