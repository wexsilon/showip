const path = require('node:path');

const express = require('express');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon')
const morgan = require('morgan');

const indexRoutes = require('./routes/index');

const app = express();

async function main() {
    
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.set('trust proxy', true);
    
    app.use(morgan('dev'));
    app.use(serveStatic(path.join(__dirname, 'public')));
    app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
    
    app.use('/', indexRoutes);

    app.listen(8000, () => console.log('Started Server On Port 8000'));
}

main();
