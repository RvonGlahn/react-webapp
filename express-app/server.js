require('dotenv').config();
const app = require('./app');

const port = process.env.NODE_DOCKER_PORT || 8080;
const hostname = process.env.NODE_HOST || '0.0.0.0';

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
