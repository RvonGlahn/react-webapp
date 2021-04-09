const express = require("express");
const router = express.Router();
const path = require("path");

// if (process.env.NODE_ENV === 'production') {
// Serve any static files
router.use(express.static(path.join(__dirname, "../webdev/build")));

// Handle React routing, return all requests to React app
router.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "../webdev/build", "index.html"));
});
// }

module.exports = router;
