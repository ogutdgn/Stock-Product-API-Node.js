"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')

// User Model:
const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        // unique: true,
    },

    images: [],


}, { collection: 'categories', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Category', CategorySchema);