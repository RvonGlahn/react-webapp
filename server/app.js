require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const fs = require("fs");
const indexRouter = require("./routes/index");
const fifaRouter = require("./routes/fifa");

var app = express();

const port = process.env.PORT;
const hostname = process.env.HOST;
const csrfProtection = csrf({ cookie: true });

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
    ],
    methods: "GET,HEAD,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

// allow proxy for nginx
app.set("trust proxy", true);

// add middleware
app.use(logger("combined", { stream: accessLogStream }));
app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(limiter); //  apply limiter to all requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, process.env.BUILD_PATH)));

// routes
app.use("/fifa21", fifaRouter);
app.use("/", indexRouter);

// error handler
app.use(function (error, req, res, next) {
    // response with the error message
    res.json({ message: error.message });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// https.createServer(app).listen()
