const path = require('node:path');

const express = require('express');
const serveStatic = require('serve-static');
const morgan = require('morgan');

const indexRoutes = require('./routes/index');

const app = express();

async function main() {
    
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    app.use(morgan('dev'));
    app.use(serveStatic(path.join(__dirname, 'public')));
    
    app.use('/', indexRoutes);

    app.listen(8000, () => console.log('Started Server On Port 8000'));
}

main();
