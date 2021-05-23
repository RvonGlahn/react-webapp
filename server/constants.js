const rateLimit = require("express-rate-limit");
const fs = require("fs");
const path = require("path");

// create a write stream (in append mode) for morgan logger
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "logs", "access.log"),
    { flags: "a" }
);

// set access limiter to page
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

// define cors options only for localhost and proxy
const corsOptions = {
    origin: [
        `http://${process.env.HOST}:${process.env.PORT}/`,
        `${process.env.PROXY_URL}:${process.env.PROXY_PORT}/`,
        "http://localhost:5000/api/",
        "http://192.168.178.20:5000/api/attributes",
    ],
    methods: "GET,HEAD,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

// define csp options for helmet module
const cspOptions = {
    useDefaults: true,
    directives: {
        defaultSrc: [
            "'self'",
            "http://localhost:*",
            `http://${process.env.HOST}:*`,
            `http://${process.env.HOST}:*`,
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com",
        ],
        scriptSrc: [
            "'self'",
            "http://localhost:*",
            `http://${process.env.HOST}:*`,
        ],
        imgSrc: [
            "'self'",
            "http://localhost:8080/favicon.ico",
            "http://localhost:8080/logo192.png",
            `http://${process.env.HOST}:*`,
            `http://${process.env.HOST}:*`,
        ],
        upgradeInsecureRequests: null,
    },
};

exports.accessLogStream = accessLogStream;
exports.limiter = limiter;
exports.corsOptions = corsOptions;
exports.cspOptions = cspOptions;
