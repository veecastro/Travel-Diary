const mongoose = require('mongoose');



const destinationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        // images: { type: String, required: true },
        description: { type: String, required: false },

    },
    {
        timestamps: true
    }
);

const Destination = mongoose.model('Destination', destinationSchema);



module.exports = Destination;

