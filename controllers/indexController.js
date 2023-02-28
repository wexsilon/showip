const requestIp = require('request-ip');

module.exports = (req, res) => {
    let ip = requestIp.getClientIp(req);
    if (ip.startsWith('::ffff:'))
        ip = ip.substr(7);
    res.render('index', { title: 'Show IP', ip });
};