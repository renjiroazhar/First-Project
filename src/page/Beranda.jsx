import React from 'react';
import Navbar from '../Component/Navbar';
import Jumbotron from '../Component/Jumbotron';
import Kartu from '../Component/Kartu';
import '../Component/Kartu.css';
import Footer from '../Component/Footer';
import { Button } from 'reactstrap';
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

export default class Beranda extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Kartu />
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
                    <CardText style={{ textAlign: 'left', color: 'black' }}>
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
        <center><Button href="/santren-kilat" outline color="success" className="my-4">
          Lihat Seluruh Santren Kilat
        </Button></center>

        <div className="sanl-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <div className="container">
            <div className="row">
              <div
                className="Warna-biru col-12 col-sm-12 col-md-6 col-lg-6"
                style={{ backgroundColor: '#0bc72a', color: '#fff' }}>
                <div className="card-body">
                  <h4 className="card-title text-center">Kegiatan</h4>
                  <br />
                  <div align="center">
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Koding
                    </p>
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Belajar Agama dan Al Qur'an
                    </p>
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Pendidikan Karakter
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <a className="card-text small text-secondary" />
                    </div>
                    <div align="right" className="col-5">
                      <span className="small" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="Warna-putih col-12 col-sm-12 col-md-6 col-lg-6"
                style={{ backgroundColor: '#fff' }}>
                <div className="card-body mx-0" style={{ border: '' }}>
                  <center><img
                    height="100px"
                    src="http://i63.tinypic.com/oid9xu.png"
                    className="my-1"
                  /></center>
                  <h4 className="card-title text-center">
                    "Memberi Manfaat Untuk Umat"
                  </h4>
                  <br />
                  <center><h6>-Santren Koding-</h6></center>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div
          className="sanlight-body"
          style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 className="text-center">Mondok by Santren Koding</h3>
          <p className="card-text text-center">
            Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3
            Tahun hingga jaminan kerja
          </p>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4" />
              <div
                align="center"
                className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  width="100%"
                  className="Card"
                  src="http://i67.tinypic.com/2m2gkyp.png"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4" />
            </div>
            <div className="col-sm-4">
              <br />
            </div>
          </div>
        </div>

        <center><button href="/mondok" className="btn btn-outline-success my-4" type="submit">
          Lihat Selengkapnya
        </button></center>

        <div className="sanl-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 className="text-center">Sponsor & Partner</h3>
          <br />
          <div class="row">
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4" />
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4">
              <a href="http://klinikita.co.id/">
                <img
                  width="80%"
                  class="box-shadow"
                  src="http://i67.tinypic.com/2hcn70k.jpg"
                />
              </a>
            </div>
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4" />
          </div>
        </div>

        <br />
        <div className="container">
          <div class="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.undip.ac.id/language/id/">
                {' '}
                <img
                  height="100px"
                  src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="http://www.dinus.ac.id/">
                <img
                  height="100px"
                  src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.unisbank.ac.id/">
                {' '}
                <img
                  height="100px"
                  src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="http://www.java-valley.com/">
                {' '}
                <img
                  height="100px"
                  src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.dynamiclearningid.org/">
                {' '}
                <img
                  height="100px"
                  src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.go-mekanik.com/">
                {' '}
                <img
                  height="100px"
                  src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"
                />
              </a>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-12 col-sm-6 col-md-2 col-lg-2">
              <br />
              <a href="http://sdk.semarangkota.go.id/">
                <img
                  height="100px"
                  src="http://sdk.semarangkota.go.id/web/pemkot.png"
                />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <br />
              <a href="http://www.sandec.org/">
                {' '}
                <img
                  height="80px"
                  src="http://www.sandec.org/images/sandec-logo.png"
                />
              </a>
              <br />
            </div>
            <div className="col-12 col-sm-6 col-md-2 col-lg-2">
              <a href="https://www.facebook.com/SemarangOpenGo/">
                <img height="120px" src="http://i64.tinypic.com/28v94w6.png" />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <br />
              <img
                height="50px"
                src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <div
            className="About-body"
            style={{ borderTop: '1px solid #e7e7e7' }}>
            <br />
            <br />
            <center><h3>Kontak</h3></center>
            <br />
            <div className="container">
              <div className="row">
                <div align="center" className="col">
                  <i className="anticon anticon-phone" /> 082225111587 <br />
                  <i className="anticon anticon-mail" /> santrenkoding@gmail.com{' '}
                  <br />
                  <br />
                  <i className="anticon anticon-environment" /> Titik Ruang
                  Space,<br />Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,<br />Kota
                  Semarang, Jawa Tengah 50269
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
