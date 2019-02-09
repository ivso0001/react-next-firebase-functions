const functions = require('firebase-functions')
const express = require('express')
const next = require('next')
const cors = require('cors');
var dev = process.env.NODE_ENV !== "production"
var app = next({ dev })
var handle = app.getRequestHandler()

const server = express() 
server.use(cors({ origin: true }));
server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
})

server.get('*', (req, res) => {
    const result = handle(req, res)
    return result
})

exports.next = functions.https.onRequest((req, res)=>{
    return app.prepare()
        .then(() => {
            return server(req, res)
        })
        .catch((ex) => {
            console.error(ex.stack)
            process.exit(1)
        })
})