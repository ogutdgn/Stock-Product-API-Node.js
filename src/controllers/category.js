"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI Project
------------------------------------------------------- */
// Category Controller:

const Category = require('../models/category');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "List Categorys"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Category)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Category),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Create Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Categoryname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */

        //EĞER login olan kullanıcı admin değilse post işleminde yetkileri false  
        // req.body.isStaff=false
        // req.body.isAdmin=false
        
        const data = await Category.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Get Single Category"
        */        


        //? other way to do this check
        // if (!req.Category.isAdmin) {
        //     req.params.id = req.Category.id
        // }
        // const data = await Category.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Update Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Categoryname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */

        res.status(202).send({
            error: false,
            data,
            new: await Category.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Delete Category"
        */

        const data = await Category.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}