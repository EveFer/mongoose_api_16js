// Generar un endpoint que permita listar
const express = require('express')

const server =  express()

server.use(express.json()) //


server.get('/koders', (request, response) => {
    // 
    response.json({
        success: true,
        data: {
            koders: []
        }
    })
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})
