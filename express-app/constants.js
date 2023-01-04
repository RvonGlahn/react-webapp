const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

// create a write stream (in append mode) for morgan logger
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'logs', 'access.log'),
    { flags: 'a' }
);

// set access limiter to page
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

const corsOptions = {
    origin: [
        `http://${process.env.NODE_HOST}:${process.env.NODE_DOCKER_PORT}/`,
        'http://localhost:5000/api/',
        `http://${process.env.FLASK_RUN_HOST}:${process.env.FLASK_RUN_PORT}/`,
    ],
    methods: 'GET,HEAD,POST',
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

const cspOptions = {
    useDefaults: true,
    directives: {
        defaultSrc: [
            "'self'",
            'http://localhost:*',
            'http://0.0.0.0:*',
            'htttp://192.178.168.43:*',
            `http://${process.env.NODE_HOST}:*`,
            `http://${process.env.NODE_HOST}:*`,
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
        ],
        scriptSrc: [
            "'self'",
            'http://localhost:*',
            `http://${process.env.NODE_HOST}:*`,
        ],
        imgSrc: [
            "'self'",
            'http://localhost:8080/favicon.ico',
            'http://localhost:8080/logo192.png',
            `http://${process.env.NODE_HOST}:*`,
            `http://${process.env.NODE_HOST}:*`,
        ],
        upgradeInsecureRequests: null,
    },
};

exports.accessLogStream = accessLogStream;
exports.limiter = limiter;
exports.corsOptions = corsOptions;
exports.cspOptions = cspOptions;
