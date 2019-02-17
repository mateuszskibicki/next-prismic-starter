// express
const express = require('express')

// Middleware lib
const compression = require('compression')

// Custom middleware
const testMiddleware = require('../middleware/testMiddleware')

// API controllers
const testController = require('./testController')

module.exports = function(server) {

    // Middleware
    server.use(compression())
    server.use(express.json())
    server.use(testMiddleware)

    // Custom API endpoints
    server.use('/api/test', testController);

}