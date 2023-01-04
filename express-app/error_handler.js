const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // - Write all logs with importance level of `error` or less to `error.log`
        new winston.transports.File({
            filename: './logs/error.log',
            level: 'error',
        }),
    ],
});

// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
    logger.log('error', `ERROR: ${error.message}`);
    console.log('Hallo');
    next(error); // calling next middleware
};

// Error handling Middleware function reads the error message
// and sends back a response in JSON format

const errorResponder = (error, request, response, next) => {
    response.header('Content-Type', 'application/json');
    const status = error.status || 400;
    response.status(status).send(error.message);
};

exports.errorLogger = errorLogger;
exports.errorResponder = errorResponder;
