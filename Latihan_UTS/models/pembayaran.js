const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    transaksi_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nama',
        require: true,
    },
    transaksi_id : {
        type: String,
       
    },
    jumlah : {
        type : number,
       
    },
    tanggal_pembayaran:{
        type: String,
    },
    status: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("pembayaran", pembayaranSchema);
module.exports = pesanan;

