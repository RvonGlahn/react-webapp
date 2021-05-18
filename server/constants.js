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
        "http://${process.env.HOST}:${process.env.PORT}/",
        "${process.env.PROXY_URL}:${process.env.PROXY_PORT}/",
        "http://localhost:5000/api/",
        "http://192.168.178.20:5000/api/attributes",
    ],
    methods: "GET,HEAD,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

const cspOptions = {
    useDefaults: true,
    directives: {
        "default-src": ["self", "http://192.168.178.20:5000/api/"],
        "connect-src": [
            "'self'",
            "http://192.168.178.20:5000/api/attributes",
            "http://192.168.178.20:5000/api/search",
            "http://192.168.178.20:5000/api/suggest",
        ],
        "img-src": [
            "'self'",
            "http://localhost:8080/favicon.ico",
            "http://localhost:8080/logo192.png",
        ],
        "manifest-src": ["http://localhost:8080/manifest.json"],
        "style-src": null,
        "style-src-elem": null,
    },
};

exports.accessLogStream = accessLogStream;
exports.limiter = limiter;
exports.corsOptions = corsOptions;
exports.cspOptions = cspOptions;

/*
"'self'",
            "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
            "http://localhost:8080/static/css/main.42381307.chunk.css",
            "http://localhost:8080/static/js/runtime-main.442b001a.js",
            "http://localhost:8080/static/js/main.b80ed727.chunk.js",
            "http://localhost:8080/static/js/2.f9676032.chunk.js", */
