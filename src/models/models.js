const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MascotaSchema = new Schema({
    id:{type: String, required: true, unique: true},
    nombre: String,
    raza: String,
    tipo: String,
    adoptado: Boolean,
    vacunado: Boolean,
    ubicacion: String
});

const UsuarioSchema = new Schema({
    nombre: String,
    password: String
});

const Mascota = mongoose.model("Mascota", MascotaSchema);
const Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = {Usuario, Mascota};
