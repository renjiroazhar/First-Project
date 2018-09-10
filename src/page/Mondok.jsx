import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import '../Component/Jumbotronn.css';
import Jumboo from '../Component/Jumbotronn';

export default class Mondok extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumboo />
          
          <center> <h2 className='my-1'>KABAR GEMBIRA 
            <br/>UNTUK KAMU YANG PASSION DIBIDANG IT</h2></center>
            <center><p className="des my-2 tulis">Santren Koding saat ini sedang membuka pendaftaran santri baru.<br/>Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan <br /> live project.
            
        <br/>
      
        <br/>
        
      </p>
      </center>


        <div>
        <div className="row">
        <div span="6" style={{left: '128px'}} className="col-6">
        <img height="400px" src="http://i67.tinypic.com/2m2gkyp.png"  alt="Santren" />
        </div>
        <div span="6" className="fasilitas col-6">
        <h4>Fasilitas</h4><i className="anticon anticon-check"></i>GRATIS BIAYA PENDIDIKAN
        <br/>
        <i className="anticon anticon-check"></i>GRATIS UANG MAKAN DAN ASRAMA
        <br/><i className="anticon anticon-check"></i>TEMPAT BELAJAR YANG NYAMAN<br/>
        <i className="anticon anticon-check"></i>RIHLAH 2 BULAN SEKALI
        <br/>
        <h4>
            <br/>Persyaratan
            </h4>
            <i className="anticon anticon-check"></i>MUSLIM
            <br/>
            <i className="anticon anticon-check">
            </i>LAKI-LAKI (USIA MAKS 23TH)<br/><i className="anticon anticon-check"></i>MENGINAP/TINGGAL DI ASRAMA<br/><i className="anticon anticon-check"></i>BUKAN YANG MENGHALALKAN ROKOK<br/><i className="anticon anticon-check"></i>BERSUNGGUH-SUNGGUH<br/><i className="anticon anticon-check"></i>MEMPUNYAI LAPTOP
            <br/><i className="anticon anticon-check"></i>WAJIB HOBI NGODING<br/><i className="anticon anticon-check"></i>SIAP BELAJAR 16 JAM/HARI<br/><h4><br/>Periode</h4><i className="anticon anticon-check"></i>PERIODE 1: Pendaftaran Tutup 18 Maret 2018<br/><i className="anticon anticon-check"></i>PERIODE 2: Pendaftaran Tutup 31 Mei 2018<br/><i className="anticon anticon-check"></i>PERIODE 3: Pendaftaran Tutup 1 Juli 2018<br/><i className="anticon anticon-check"></i>Muslimah (Untuk Perempuan): Coming soon...<br/>
        </div></div></div>
        
        <div className="container"><br/><br/>
       <center> <a href="https://s.id/daftarmondok" className="btn btn-success btn-lg">Daftar Sekarang!</a>
       </center>
       </div>
      
        <Footer />
      </div>

    );
  }
}