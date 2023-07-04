import React from "react";
import { Tooltip as TooltipReactStrap } from "reactstrap";
import { useState } from "react";
import { FlipCameraIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReUploadButton = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const handleClick = (e) => {
    let reply = window.confirm(
      "사진을 다시 업로드하시겠습니까? \n 현재의 책 목록은 저장되지 않습니다."
    );
    if (reply) {
      //navigate to upload page
      navigate(`/upload`, {
        replace: true,
      });
    }
  };

  return (
    <>
      <div>
        <IconButton onClick={handleClick}>
          <FlipCameraIos id="reupload" />
        </IconButton>
      </div>
      <TooltipReactStrap
        placement="top"
        isOpen={tooltipOpen}
        autohide={false}
        target="reupload"
        toggle={toggle}
      >
        재업로드
      </TooltipReactStrap>
    </>
  );
};

export default ReUploadButton;
