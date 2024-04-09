"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/sale:

const permissions = require('../middlewares/permissions')
const sale = require('../controllers/sale')

// URL: /sales

router.route('/')
    .get(permissions.isAdmin, sale.list)
    .post(permissions.isStaffOrisAdmin, sale.create)

router.route('/:id')
    .get(permissions.isLogin, sale.read)
    .put(permissions.isLogin, sale.update)
    .patch(permissions.isLogin,sale.update)
    .delete(permissions.isStaffOrisAdmin, sale.delete)

/* ------------------------------------------------------- */
module.exports = router