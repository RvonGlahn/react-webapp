require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 8080;
const hostname = process.env.HOST;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// https.createServer(app).listen()
