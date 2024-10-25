const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    produk_id:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        require: true,
    },
    deskripsi : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        require: true,
       
    },
    harga : {
        type : number,
       
    },
    stok: {
        type: number,
    },
    kategori_id: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("Produk", mahasiswaSchema);
module.exports = Mahasiswa;

