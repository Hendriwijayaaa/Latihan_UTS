const mongoose = require("mongoose");

const kategori_idSchema = new mongoose.Schema({
    nama_kategori : {
        type : String,
    },
    deskripsi : {
        type: String,
       
    },
    created_at: {
        type : number,
       
    },
    updated_at:  {
        type: number,
    },
    status: {
        type: Boolean,
    }
});

const Mahasiswa = mongoose.model("kategori", kategoriSchema);
module.exports = Mahasiswa;

