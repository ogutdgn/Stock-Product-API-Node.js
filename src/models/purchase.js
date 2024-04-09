"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')

// User Model:
const PurchaseSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },

    firmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Firm",
        required: true,
        index: true,
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
        index: true,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        index: true,
    },

    quantity: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    priceTotal: {
        type: Number,
        //? we can make this calculation in controller too. Actually its better to use this methods in controller. This is an example too.
        default: function() { return this.quantity * this.price }, //! this method works in only create function
        transform: function() { return this.quantity * this.price }, //! this method works in update function and also
    },

}, { collection: 'purchases', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Purchase', PurchaseSchema);