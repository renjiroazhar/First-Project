import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';

export default class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron className="jumbotron">
                <h1 className="display-3">Belajar Jadi Asyik!</h1>
                <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
                <p>
                    <Button href="#pelatihan" className="btn btn-success btn-lg" color="success" style={{margin: '23px'}}>Mulai Belajar</Button>
                </p>
            </Jumbotron>
        );
    }
}