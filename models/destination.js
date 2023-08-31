const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        // images: { type: String, required: true },
        description: { type: String, required: true },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Destination', destinationSchema);

