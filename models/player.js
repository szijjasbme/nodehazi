const Schema = require('mongoose').Schema;
const db = require('../config/db');

const PlayerModel = db.model('PlayerModel', {
    name: String,
    position: String,
    point: Number,
    assist: Number,
    rebound: Number,
    age: Number,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'TeamModel'
    }
});

module.exports = PlayerModel;
