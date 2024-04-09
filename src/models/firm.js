"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')

// User Model:
const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },

    phone: {
        type: String,
        trim: true,
        required: true,
    },
    
    address: {
        type: String,
        trim: true,
        required: true,
    },

    images: [],


}, { collection: 'firms', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Firm', FirmSchema);