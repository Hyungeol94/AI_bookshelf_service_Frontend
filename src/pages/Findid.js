// react
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// style
import "../styles/Findid.css";

const ForgotId = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("구현중입니다.");
    navigate("/login");
  });
};

export default ForgotId;
