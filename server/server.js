const express = require('express')
const routes = require('./routesFrontEnd')
const compression = require('compression')
const next = require('next')
const testMiddleware = require('./middleware/testMiddleware')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

// .env file
require('dotenv').config()

// API controllers
const testController = require('./router/testController')


app.prepare()
    .then(() => {
        const server = express()
        // Middleware
        server.use(compression())
        server.use(express.json())
        server.use(testMiddleware)

        // Custom API endpoints
        server.use('/api/test', testController);

        // Next.js
        server.get('*', async (req, res) => {
            return handle(req, res)
        })

        // Listen port 3000
        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })