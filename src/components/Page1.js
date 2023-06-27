import { Container, Button } from "reactstrap";
import SecondPage from "components/Page2.js";

const FirstPage = () => {
    return (
        <div>
            <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">Book is On & On</h1>
              <h2 className="d-none d-sm-block">
                인공지능으로 만드는 나만의 디지털 서재
              </h2>
              <Button color="info" size="lg" href="/login">
                회원가입하고 서비스 시작하기
              </Button>
            </div>
          </Container>
        </div>
    );
};

export default FirstPage;