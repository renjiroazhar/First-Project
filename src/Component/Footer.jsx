import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div style={{display: 'block', height: '60px', width: '100%'}}></div>
                    <div style={{backgroundColor: 'rgb(250, 250, 250)', borderTop: '1px solid rgb(231, 231, 231)', textAlign: 'center', padding: '20px', left: '0px', bottom: '0px', height: '60px', width: '100%', color: 'rgb(108, 117, 125)'}}>
                        <div class="container">
                            <div class="row">
                                <div align="left" class="col-12">Copyright © Santren Koding 2018. All rights reserved.</div>
                                <div class="col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}