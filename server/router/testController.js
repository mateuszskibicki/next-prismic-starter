const express = require('express')
const router = express.Router()

router.get('/:id', async (req, res) => {
    if (req.params.id) return res.status(200).json({id: req.params.id})
    return res.status(404).json({error: 'Param :id is not defined'})
})

router.get('/test/error', async (req, res) => {
    return res.status(404).json({error: 'This is 404 status'})
})

router.get('/env/get', async (req, res) => {
    return res.status(200).json({env_test: process.env.TEST_VAR})
})

module.exports = router