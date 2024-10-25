const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    produk_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategori',
        require: true,
    },
    pengguna_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nama_id',
        require: true,
       
    },
    jumlah : {
        type : number,
       
    },
    tanggal_transaksi:{
        type: number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("transaksi", transaksiSchema);
module.exports = transaksi;