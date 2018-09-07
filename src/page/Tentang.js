import React from 'react';
import Navbar from '../Component/Navbar';
import Ttg from'../Component/tentang';
import Footer from '../Component/Footer';

export default class Tentang extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Ttg />
        <Footer />
    </div>
    );
  }
}