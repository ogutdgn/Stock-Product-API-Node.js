"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')

// User Model:
const BrandSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        // unique: true,
    },

    images: [],


}, { collection: 'brands', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Brand', BrandSchema);