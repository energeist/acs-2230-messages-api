const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    _id: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    modelYearStart: { type: Number, required: true },
    modelYearEnd: { type: Number, required: false },
    numberOfDoors: { type: Number, required: false },
    modernHp: { type: Number, required: true },
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;