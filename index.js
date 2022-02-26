// Generar un endpoint que permita listar
const express = require('express')
const mongoose =  require('mongoose')

const Koder = require('./koderModel')
const server =  express()


const DB_USER = 'fernanda'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia16.gyrdh.mongodb.net'
const DB_NAME = 'kodemia'


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

server.use(express.json()) //


server.get('/koders', async (request, response) => {
    // 
    const koders = await Koder.find({}) // regresa una promesa
    response.json({
        success: true,
        data: {
            koders: koders
        }
    })
})

server.get('/koders/:id', async (request, response) => {
    try {
        const idKoder = request.params.id
        // const koderFound = await Koder.find({_id: idKoder}) // regresa una promesa
        const koderFound = await Koder.findById(idKoder) // regresa un objeto si lo encuentra si no undefined
        // si no encuentras al koder
        // if (!koderFound) {
        //     response.status(404)
        //     response.json({
        //         success: false,
        //         message: 'koder not found'
        //     })
        //     return
        // }
        if(!koderFound) throw new Error('koder not found')

        response.json({
            success: true,
            data: {
                koder: koderFound
            }
        })
    } catch (error) {
        response.status(404)
        response.json({
            success: false,
            message: error.message
        })
    }
})

server.post('/koders', async (request, response) => {
    try {
        const newKoder = request.body
        const koderCreated = await Koder.create(newKoder) // regresa una promesa
        response.json({
            success: true,
            message: 'Koder created',
            data: {
                koder: koderCreated
            }
        })
    } catch (error) {
        // Error()
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
    // try {

    // } catch (error) {

    // }
})



mongoose.connect(URL) // regresa una promesa
    .then(() => {
        console.log('Database connected :D')
        server.listen(8080, () => {
            console.log('Server running on port 8080')
        })
    })
    .catch((error) => {
        console.log('Error al conectarnos a la BD: ', error)
    })


// 
/*
Práctica:
Agregar filtros por medio de queries params al endpoint GET /koders?gender=m&age=27

Investigar acerca de middlewares en express
*/
