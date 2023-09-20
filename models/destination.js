const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const destinationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },

        images: { type: String, required: true },
        description: { type: String, required: false },
        // name: req.body.name,
        // photo: {
        //     filename: req.file.filename,
        //     mimetype: req.file.mimetype,

        // },

        //     user: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //         required: true
        //     },
        //     userName: String,
        //     userAvatar: String

        // },
    },
    {
        timestamps: true
    }
);

const Destination = mongoose.model('Destination', destinationSchema);



module.exports = Destination;

