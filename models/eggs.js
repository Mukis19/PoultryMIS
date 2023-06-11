const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eggs = new Schema({
    productionDate: { type: Date, required: true },
    noOfEggs: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
const Eggs = mongoose.model('eggs', eggs);
module.exports = Eggs;