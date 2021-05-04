const express = require("express");
const router = express.Router();
const path = require("path");

if (process.env.NODE_ENV == "production") {
    // Handle React routing, return all requests to React app
    router.get("/", function (req, res) {
        res.sendFile(
            path.join(__dirname, "../", process.env.BUILD_PATH, "index.html")
        );
    });
    router.get("/fifa", function (req, res) {
        res.sendFile(
            path.join(__dirname, "../", process.env.BUILD_PATH, "index.html")
        );
    });
    router.get("/projects", function (req, res) {
        res.sendFile(
            path.join(__dirname, "../", process.env.BUILD_PATH, "index.html")
        );
    });
    router.get("/login", function (req, res) {
        res.sendFile(
            path.join(__dirname, "../", process.env.BUILD_PATH, "index.html")
        );
    });
}

module.exports = router;
