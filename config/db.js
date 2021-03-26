const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FDPU32', { useNewUrlParser: true } );

module.exports = mongoose;