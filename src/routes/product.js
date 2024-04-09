"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/product:

const permissions = require('../middlewares/permissions')
const product = require('../controllers/product')

// URL: /products

router.route('/')
    .get(permissions.isAdmin, product.list)
    .post(permissions.isStaffOrisAdmin, product.create)

router.route('/:id')
    .get(permissions.isLogin, product.read)
    .put(permissions.isLogin, product.update)
    .patch(permissions.isLogin,product.update)
    .delete(permissions.isStaffOrisAdmin, product.delete)

/* ------------------------------------------------------- */
module.exports = router