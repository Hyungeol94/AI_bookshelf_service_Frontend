import React from 'react';
import TermTxt from '../components/Termtxt';
import Footer from 'components/Footer/Footer.js';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import { Container, Button } from 'reactstrap';
import '../styles/Terms.css';

const TermsPage = () => {
    const handleGoBack = () => {
        window.history.back();
    };

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
