const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/PSCproject');

const obecSchema = new Schema({
    OBEC: String,
    OKRES: String,
    PSC: String
});

module.exports = mongoose.model('ObcePSC',obecSchema);