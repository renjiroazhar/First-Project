import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotronn.css';


export default class Jumboo extends React.Component {
    render() {
        return (
            <Jumbotron style={{background: 'url(http://i66.tinypic.com/28am9fs.jpg)', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundSize: 'auto auto', color: '#fff', backgroundSize: 'cover'}}>
                <center><img src="http://i65.tinypic.com/9ldboy.png" style={{justifyContent: 'center', verticalAlign: 'middle',}} alt="santren" /></center>
                <center><h1 className="display-3">Mondok by Santren Koding </h1></center>
                <center><p className="lead">Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an</p></center>
                <br/>
                <center>
                <Button href="https://s.id/daftarmondok" color="success" className="btn btn-lg btn-success">Daftar Sekarang!</Button>{' '} 
                </center>
            </Jumbotron>
        );
    }
}