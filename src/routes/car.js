const express = require('express')
const router = express.Router();

const car = require('../models/car')
const User = require('../models/user')

/** Route to get all cars. */
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
    } catch(err) {
        console.log(err);
    }
    return res.send(cars);
})

/** Route to get one car by id. */
router.get('/:carId', async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);
    } catch(err) {
        console.log(err);
    }
    return res.send(car);
})

/** Route to add a new car. */
router.post('/', async (req, res) => {
    let car = new Car(req.body);
    savedCar = await car.save()
    return res.send({
        car: 'Create new car',
        data: req.body
    })
})

/** Route to update an existing car. */
router.put('/:carId', async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.carId, req.body);
    } catch(err) {
        console.log(err);
    }
    return res.json({
        car: `Update car with id ${req.params.carId}`,
        data: req.body
    })
})

/** Route to delete a car. */
router.delete('/:carId', async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    } catch(err) {
        console.log(err);
    }
    return res.json({
        'message': 'Successfully deleted.',
        '_id': req.params.carId
    })
})

module.exports = router