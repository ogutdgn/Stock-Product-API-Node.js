"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/category:

const permissions = require('../middlewares/permissions')
const category = require('../controllers/category')

// URL: /categorys

router.route('/')
    .get(permissions.isAdmin, category.list)
    .post(permissions.isStaffOrisAdmin, category.create)

router.route('/:id')
    .get(permissions.isLogin, category.read)
    .put(permissions.isLogin, category.update)
    .patch(permissions.isLogin,category.update)
    .delete(permissions.isStaffOrisAdmin, category.delete)

/* ------------------------------------------------------- */
module.exports = router