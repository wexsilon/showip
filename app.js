const path = require('node:path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const serveStatic = require('serve-static');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://0.0.0.0:27017/DBNAME');
    
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    app.use(morgan('dev'));
    app.use(serveStatic(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    
    app.use(
        expressSession(
            {
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: false,
                store: MongoStore.create(
                    {
                        mongoUrl: 'mongodb://0.0.0.0:27017/DBNAME_SESSION'
                    }
                )
            }
        )
    );

    app.listen(8000, () => console.log('Started Server On Port 8000'));
}

main();
