"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/firm:

const permissions = require('../middlewares/permissions')
const firm = require('../controllers/firm')

// URL: /firms

router.route('/')
    .get(permissions.isAdmin, firm.list)
    .post(permissions.isStaffOrisAdmin, firm.create)

router.route('/:id')
    .get(permissions.isLogin, firm.read)
    .put(permissions.isLogin, firm.update)
    .patch(permissions.isLogin,firm.update)
    .delete(permissions.isStaffOrisAdmin, firm.delete)

/* ------------------------------------------------------- */
module.exports = router