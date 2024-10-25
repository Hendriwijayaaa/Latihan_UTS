const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    pengguna_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nama',
        require: true,
    },
    produk_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        require: true,
       
    },
    jumlah : {
        type : number,
       
    },
    status:{
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("pesanan", pesananSchema);
module.exports = pesanan;

