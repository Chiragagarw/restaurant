const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
        },
    zip:{
        type: String,
        required: true
    },
    country:{
        type: String,
    },
    location:{
        type: {
        type: String,
        enum: ['Point'],
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
          },
        },
},
    {timestamps: true})

module.exports = mongoose.model("Address", addressSchema)    