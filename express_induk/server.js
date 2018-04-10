const express = require('express');
const app     = express();
const mysql   = require('mysql');
const cors    = require('cors');
const bodyParser = require('body-parser')
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kacang123',
    database : 'latihan_mysql'
});
db.connect();

app.use(cors());
app.use(bodyParser.json());

app.get('/data/:id', function(req,res){
    var sql = `select * from mahasiswa join matkul using(id_matkul) where nama = '${req.params.id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/data', function(req,res){
    var sql = 'select * from mahasiswa join matkul using(id_matkul)';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


// app.post('/data', function(req,res){
//     var data = {nama:req.body.nama, usia:req.body.usia, kota:req.body.kota}
//     var sql = 'INSERT INTO karyawan SET ?';
//     db.query(sql,data,(err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send(result);
//     });
// })

app.listen(3900, ()=>{
    console.log('Server @Port 3900')
});