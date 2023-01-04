require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const errorHandler = require('errorhandler');
const constants = require('./constants');

var app = express();

// allow proxy for nginx
app.set('trust proxy', true);

// add middleware
app.use(logger('combined', { stream: constants.accessLogStream }));
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(compression());
app.use(cors(constants.corsOptions));
app.use(constants.limiter); //  apply limiter to all requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, process.env.BUILD_PATH)));

// routes
if (process.env.NODE_ENV == 'production') {
    app.get('*', function (req, res) {
        res.sendFile(
            path.join(__dirname, process.env.BUILD_PATH, 'index.html')
        );
    });
}

// error handler
if (process.env.NODE_ENV === 'development') {
    app.use(
        errorHandler({
            dumpExceptions: true,
            showStack: true,
        })
    );
} else if (process.env.NODE_ENV === 'production') {
    //gefährlich
    app.use(
        errorHandler({
            showStack: false,
        })
    );
}

process.on('uncaughtException', function (err) {
    console.error('An uncaught error occurred!');
    console.error(err.stack);
    process.exit();
});

module.exports = app;
