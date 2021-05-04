const createError = require("http-errors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const fs = require("fs");

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

const indexRouter = require("./routes/index");
const fifaRouter = require("./routes/fifa");

const app = express();

const port = 8080;
const hostname = "localhost";
// const hostname = "192.168.178.20";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.set("trust proxy", true);

// add middleware
app.use(morgan("combined", { stream: accessLogStream }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(limiter); //  apply limiter to all requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/fifa21", fifaRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// https.createServer(app).listen()
