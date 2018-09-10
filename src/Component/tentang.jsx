import React from 'react';
import { Container } from 'reactstrap';

export default class Ttg extends React.Component {
    render() {
      return (
        <div style={{textAlign: 'center', borderTop: '1px solid #e7e7e7', boxSizing: 'border-box'}}>
        <br />
        <h3>Tentang Santren Koding <br /><br /></h3>
            <Container >
                <div className="row">
                    <div className="col-12">
                        <img height="1000px" src="http://i63.tinypic.com/2i7qt14.jpg" alt="" />
                    </div>
                </div>
                <br /><br />
            </Container>

        </div>
        
    
      );
    }
}