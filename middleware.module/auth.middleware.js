

module.exports.handle = function (config, access = null) {

    if (!config) {
        return new Error('Something went wrong!');
    } else {
        return async function (req, res, next) {
            next();
        }
    }
}
