import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',mahasiswa:[]}
  }
  klik(){
    this.setState({
      nama: this.refs.nama.value
    });
  }
  // klik2(){
  //   var x = this.state.nama;
  //   var y = this.state.usia;
  //   var z = this.state.kota;
  //   axios.post('http://localhost:3300/data',{
  //     nama : x,
  //     usia : y,
  //     kota:z
  //   })
  // }
  klik3(){
    var input = this.state.nama;
    axios.get('http://localhost:3900/data/'+input)
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        mahasiswa: ambilData.data,
      })
    })
  }

  render() {
    const data = this.state.mahasiswa.map((item, index)=>{
      var NIM= [item.NIM]
      var id_matkul= [item.id_matkul]
      var nama = [item.nama]
     
      var alamat = [item.alamat]
      var nama_matkul = [item.nama_matkul]
      var jmlh_sks = [item.jmlh_sks]
      return <tr key={index}><td>{id_matkul}</td><td>{NIM}</td><td>{nama}</td><td>{alamat}</td><td>{nama_matkul}</td><td>{jmlh_sks}</td></tr>;
    })
    return (
      <div>
      <center>
      <h2>REACT - EXPRESS - MYSQL</h2><br/>  
      <h3>DATA MAHASISWA</h3>
      <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Masukkan Nama" onInput={()=>{this.klik();}}/><br/>
              {/* <input className="form-control" ref="usia" type="number" placeholder="Masukkan Usia" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="kota" type="text" placeholder="Masukkan kota" onInput={()=>{this.klik();}}/><br/> */}
              {/* <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>POST</button>&nbsp;&nbsp; */}
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik3();}}>GET</button>
            </div>
      <br/>
      <tr className="head">
      <td>id_matkul</td>
      <td>NIM</td>
            <td>Nama Mahasiswa</td>

            <td>Alamat</td>
            <td>Nama_Matkul</td>
            <td>Jumlah_sks</td>
          </tr>
      {data}
    
      </center>
      </div>
    );
  }
}

export default App;