const requestIp = require('request-ip');
const ipaddr = require('ipaddr.js');

module.exports = async (req, res) => {
    let ip = requestIp.getClientIp(req);
    ip = ipaddr.process(ip).toString();
    res.render('index', { title: 'Show IP', ip });  
};