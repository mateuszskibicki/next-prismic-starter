module.exports =  function (req, res, next) {
    if (req.originalUrl === '/test-middleware-redirection') return res.redirect('/api/test/middleware-works')
    next()
}