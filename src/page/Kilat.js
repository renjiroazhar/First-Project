import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import '../Component/Kartu.css';
// import { Row, Col } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {
  Card,
  // Button,
  CardImg,
  CardTitle,
  CardText,
  // CardDeck,
  // CardSubtitle,
  CardBody
} from 'reactstrap';
import { Container } from 'reactstrap';


export default class Kilat extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="sanlat-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 style={{ textAlign: 'center' }}>Daftar Santren Kilat Koding</h3>
          <br />
          <Container>
            <Row>
              <Col sm="4">
                <Card className="kart">
                  <CardImg
                    top
                    width="100%"
                    src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle style={{ textAlign: 'left' }}>
                      Santren Kilat #1 (Coming Soon)
                    </CardTitle>
                    <CardText style={{ textAlign: 'left' }}>
                      4 Hari Intensif Laravel
                    </CardText>
                    <Row>
                      <div className="col-5">
                        <a className="text-secondary small">
                          by Santren Koding
                        </a>
                      </div>
                      <div className="col-7 text-right">
                        <span
                          textAlign="right"
                          color="red"
                          className="small"
                          style={{ marginRight: '15px', color: 'red' }}>
                          Kuota Terbatas
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}