const Schema = require('mongoose').Schema;
const db = require('../config/db');

const TeamModel = db.model('TeamModel', {
    name: String,
    abbreviation: String,
    founded: Number,
    champ: Number
});

module.exports = TeamModel;