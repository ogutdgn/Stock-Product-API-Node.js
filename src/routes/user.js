"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/user')

// URL: /users

router.route('/')
    .get(permissions.isAdmin, user.list)
    .post(user.create)

router.route('/:id')
    .get(permissions.isLogin, user.read)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin,user.update)
    .delete(permissions.isStaffOrisAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router