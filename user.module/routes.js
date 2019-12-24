var express = require('express');
var router = express.Router();
const { handle } = require('./factories/middleware.factory');

/* GET users listing. */
router.get('/', handle({
    name: 'auth'
}), function (req, res, next) {
    console.log('handle auth')
    res.send('resource')
});

module.exports = router;