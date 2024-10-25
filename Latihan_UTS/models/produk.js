const mongoose = require("mongoose");


const ProdukSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    deskripsi : {
        type: String,
       
    },
    harga : {
        type : number,
       
    },
    stok: {
        type: number,
    },
    kategori_id: {
       
    }
});

const Mahasiswa = mongoose.model("Produk", mahasiswaSchema);
module.exports = produk;