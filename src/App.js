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
          <Route path="/Kajian" component={ Kajian }/>
          <Route path="/Kilat" component={ Kilat }/>
          <Route path="/Mondok" component={ Mondok }/>
          <Route path="/Tentang" component={ Tentang }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
