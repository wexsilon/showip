const requestIp = require('request-ip');
const https = require('node:https');

module.exports = (req, res) => {
    let ip = requestIp.getClientIp(req);
    if (ip === '::ffff:127.0.0.1') {
        https.get('https://ip.42.pl/raw', resp => {
            let data = [];
            resp.on('data', chunk => {
                data.push(chunk);
            });
            resp.on('end', () => {
                ip = Buffer.concat(data).toString();
                res.render('index', { title: 'Show IP', ip });
            });
        });
    } else {
        res.render('index', { title: 'Show IP', ip });    
    }
    
};