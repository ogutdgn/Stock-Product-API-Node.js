"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/brand:

const permissions = require('../middlewares/permissions')
const brand = require('../controllers/brand')

// URL: /brands

router.route('/')
    .get(permissions.isAdmin, brand.list)
    .post(permissions.isStaffOrisAdmin, brand.create)

router.route('/:id')
    .get(permissions.isLogin, brand.read)
    .put(permissions.isLogin, brand.update)
    .patch(permissions.isLogin,brand.update)
    .delete(permissions.isStaffOrisAdmin, brand.delete)

/* ------------------------------------------------------- */
module.exports = router