const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    produk_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategori',
        require: true,
    },
    jumlah : {
        type: Number,
     
       
    },
    tanggal_update : {
        type : Date,
       
    },
    keterangan:{
        type: String,
    },
    tanglokasigal_transaksi: {
        type: String,
    }
});

const Mahasiswa = mongoose.model("stok", stokSchema);
module.exports = stok;
