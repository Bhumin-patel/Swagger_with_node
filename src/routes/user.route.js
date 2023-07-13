const express = require('express')
const User = require('../models/user.model')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const router = new express.Router()

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: Number
 *     responses:
 *       201:
 *         description: Created
 *            content : 
 *                  application/json:
 *                      schema:
 *                          type:array
 *                          items:
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                  age:
 *                                      `type: Number
 */

//Create
router.post('/user', async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

/**
 * @swagger
 * /user:
 *  get:
 *      summary : Read all the users
 *      description : To check the get API
 *      response : 
 *          200:
 *              description : To test get method
 *              content : 
 *                  application/json:
 *                      schema:
 *                          type:array
 *                          items:
 *                              $ref: '#../models/user.model'
 */

//read
router.get('/user', async (req,res)=>{
    try{
        const user = await User.find()
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//update
router.patch('/user/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        await User.findByIdAndUpdate(_id, req.body)
        res.status(200).send('Successfully Updated!')
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete
router.delete('/user/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        await User.findByIdAndDelete(_id)
        res.status(200).send('Successfully Deleted!')
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router