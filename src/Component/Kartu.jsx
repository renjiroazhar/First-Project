import React from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { CardBody, CardTitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import './Kartu.css';

const Kartu = (props) => {
  return (
    <div>
    <h2 style={{textAlign: 'center' , margin: '0px 0px 35px 0px'}}>Daftar Kajian Koding Rutin</h2>
    <Container className="container">
    <Row>
      
    <Col xs="6" sm="4">
    <Card className="kart">
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #3</CardTitle>
          <CardText style={{textAlign: 'left' , color: 'black'}}>ReactJS dan Firebase Auth/Hosting</CardText>
          <Row>
            <div className="col 5">
            <a className='text-secondary small'>by Santren Koding</a>
            </div>
            <div className="col 7">
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

    <Col xs="6" sm="4">
    <Card className="kart">
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #2</CardTitle>
          <CardText style={{textAlign: 'left' , color: 'black'}}>html, css, boostrap dasar</CardText>
          <Row>
            <div className="col 5">
            <a className='text-secondary small'>by Santren Koding</a>
            </div>
            <div className="col 7">
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

    <Col xs="6" sm="4">
    <Card className="kart">
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #1</CardTitle>
          <CardText style={{textAlign: 'left' , color: 'black'}}>Belajar Laravel Dasar</CardText>
          <Row>
            <div className="col 5">
            <a className='text-secondary small'>by Santren Koding</a>
            </div>
            <div className="col 7">
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

    <center><Button href="/kajian-koding" outline color="success" style={{margin:'30px', alignContent:'center'}}>Lihat Seluruh Kajian Koding</Button></center>

    </div>
  );
};

export default Kartu;
