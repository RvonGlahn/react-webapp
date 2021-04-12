const express = require("express");
const router = express.Router();
const path = require("path");

const scriptFolder = path.join(__dirname, "..", "python");

router.post("/", function (req, res) {
    const PythonShell = require("python-shell");
    const options = {
        mode: "json",
        pythonPath: "",
        encoding: "utf8",
        pythonOptions: ["-u"],
        scriptPath: scriptFolder,
        args: ["getPlayers", JSON.stringify(req.body)],
    };
    PythonShell.PythonShell.run(
        "getPlayers.py",
        options,
        function (err, results) {
            if (err) console.log(err);
            if (results != null) {
                res.json(results);
            }
        }
    );
});

router.get("/", function (req, res) {
    const PythonShell = require("python-shell");

    if (req.url.includes("part")) {
        const options = {
            mode: "text",
            pythonPath: "",
            encoding: "utf8",
            pythonOptions: ["-u"],
            scriptPath: scriptFolder,
            args: ["suggest", req.query["part"]],
        };
        PythonShell.PythonShell.run(
            "getPlayers.py",
            options,
            function (err, results) {
                if (err) console.log(err);
                // Results is an array consisting of messages collected during execution
                if (results != null) {
                    res.send(results.toString());
                }
            }
        );
    } else {
        const options = {
            mode: "text",
            pythonPath: "",
            encoding: "utf8",
            pythonOptions: ["-u"],
            scriptPath: scriptFolder,
            args: ["attributes"],
        };
        PythonShell.PythonShell.run(
            "getPlayers.py",
            options,
            function (err, results) {
                if (err) console.log(err);
                // Results is an array consisting of messages collected during execution
                if (results != null) {
                    res.send(results.toString());
                }
            }
        );
    }
});

module.exports = router;
