const requestIp = require('request-ip');

module.exports = (req, res) => {
    res.render('index', { ip: requestIp.getClientIp(req) });
};