const mongoose = require("mongoose");


const ProdukSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    email : {
        type: String,
       
    },
    password : {
        type : String,
       
    },
    alamat: {
        type: String,
    },
    tanggal_daftar: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("Produk", mahasiswaSchema);
module.exports = Mahasiswa;

