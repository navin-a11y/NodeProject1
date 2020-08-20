const mongoose = require('mongoose');
const { strict } = require('assert');

const tourSchema = new mongoose.Schema({
    name: {
        type=String,
        required: [true, 'A app should have name field'],
        unique: true,
        trim: true
    },
    place: {
        type: String,
        default:'New-Delhi'
    },
    designation: {
        type: String,
        trim: true,
        unique: true
    }
});

// const tours = 