import React, { Component } from 'react';
import Beranda from './page/Beranda';
import Kajian from './page/Kajian';
import Kilat from './page/Kilat';
import Mondok from './page/Mondok';
import Tentang from './page/Tentang';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Beranda }/>
          <Route path="/kajian-koding" component={ Kajian }/>
          <Route path="/santren-kilat" component={ Kilat }/>
          <Route path="/mondok" component={ Mondok }/>
          <Route path="/tentang-kami" component={ Tentang }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
