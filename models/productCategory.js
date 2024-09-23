const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { 
        type: String,
        required: true 
        },
    description: { 
        type: String, 
        required: false 
    },

});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;