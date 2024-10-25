const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    produk_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        require: true,
    },
    persentase_diskon : {
        type: Number,
     
       
    },
    tanggal_mulai : {
        type : Date,
       
    },
    tanggal_selesai:{
        type: Date,
    },
    keterangan: {
        type: String,
    }
});

const Mahasiswa = mongoose.model("stok", stokSchema);
module.exports = stok;



produk_id: ObjectId
persentase_diskon: Number
tanggal_mulai: Date
tanggal_selesai: Date
keterangan: String