function errorHandling (err, req, res, next){
    if (err){
        let status = err.status || 500
        res.json({
            status,
            msg: 'something went wrong'
        })
    }
    next()
}
module.exports = errorHandling