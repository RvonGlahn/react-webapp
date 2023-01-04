require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const devErrorHandler = require('errorhandler');
const constants = require('./constants');
const prodErrorHandler = require('./error_handler');

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

// error handling
if (process.env.NODE_ENV === 'development') {
    app.use(
        devErrorHandler({
            dumpExceptions: true,
            showStack: true,
        })
    );
} else {
    app.use(prodErrorHandler.errorLogger);
    app.use(prodErrorHandler.errorResponder);
}

process.on('uncaughtException', function (err) {
    console.error('An uncaught error occurred!');
    process.exit();
});

module.exports = app;
