const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MissionSchema = new Schema({
    Tache: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Description: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Datedebut: {
        type: Date,
        required: [true, 'Ce champs est obligatoire'],
    },
    DateFin: {
        type: Date,
        required: [true, 'Ce champs est obligatoire'],
    },
    Equipe: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    }
    
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Missions', MissionSchema)