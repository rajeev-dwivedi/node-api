var path = require('path');

var development = require('./dev_env');

module.exports = {
    development = extend(development, defaults)
}[process.env.NODE_ENV || 'development'];

module.exports = {
    url: 'mongodb://localhost:27017/fitezo'
}