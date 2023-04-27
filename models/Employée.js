const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployéeSchema = new Schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Prenom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Email: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Categorie: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Specialite: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    NumCnss: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    Age: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Disponibilité: {
        type: Boolean,
        required: [true, 'Ce champs est obligatoire'],
    }





}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Employées', EmployéeSchema)