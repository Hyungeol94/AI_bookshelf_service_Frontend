import React, { useEffect } from "react";
// component
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import TermTxt from "../components/Termtxt";
// style
import { Container, Button } from "reactstrap";
import "../styles/Terms.css";

const TermsPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div>
          <Container className="terms-container">
            <div className="terms-card">
              <TermTxt className="termtxt" />
            </div>
          </Container>
          <div className="button-container">
            <Button className="back-button" onClick={handleGoBack}>
              뒤로
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
