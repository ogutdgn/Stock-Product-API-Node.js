"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const permissions = require('../middlewares/permissions')
const purchase = require('../controllers/purchase')

// URL: /purchases

router.route('/')
    .get(permissions.isAdmin, purchase.list)
    .post(permissions.isStaffOrisAdmin, purchase.create)

router.route('/:id')
    .get(permissions.isLogin, purchase.read)
    .put(permissions.isLogin, purchase.update)
    .patch(permissions.isLogin,purchase.update)
    .delete(permissions.isStaffOrisAdmin, purchase.delete)

/* ------------------------------------------------------- */
module.exports = router