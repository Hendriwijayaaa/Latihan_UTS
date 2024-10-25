const mongoose = require("mongoose");


const ProdukSchema = new mongoose.Schema({
    nama_supplier : {
        type : String,
    },
    alamat : {
        type: String,
       
    },
    kontak : {
        type : String,
       
    },
    email: {
        type: String,
    },
    email: {
        type: Date,
    }
});

const Mahasiswa = mongoose.model("supplier", mahasiswaSchema);
module.exports = supplier;

