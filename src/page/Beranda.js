import React from 'react';
import Navbar from '../Component/Navbar';
import Jumbotron from '../Component/Jumbotron';
import Kartu from '../Component/Kartu';
import Footer from '../Component/Footer';

export default class Beranda extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Kartu />


        <Footer />
      </div>
    );
  }
}
