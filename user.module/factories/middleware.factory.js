module.exports.handle = function (config) {
    if (process.env.ENVIRONMENT === 'production') {
        // add code for aws lambda function 
        return function(req, res, next) {
            console.log(process.env.ENVIRONMENT);
            next()
        }
    }
    
    if (process.env.ENVIRONMENT === 'development') {
        console.log(process.env.ENVIRONMENT);
        let middleware = '../../middleware.module/' + config.name + '.middleware.js'
        const { handle } = require(middleware);
        return handle(config);
    }
}