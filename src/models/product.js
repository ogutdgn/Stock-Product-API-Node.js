"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')

// User Model:
const ProductSchema = new mongoose.Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        index: true,
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
        index: true,
    },

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    images: [],

    stock: {
        type: Number,
        required: true,
    }

}, { collection: 'products', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Product', ProductSchema);