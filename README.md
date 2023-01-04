# Web server

Web server based on React-APP, Node.js express and Flask for Python API.

### Set Up

Clone the repository.

```shell
git clone <url>
```

Now build the react-app.

```bash
# install react-app and build it
cd react-webapp/react-app
npm install
npm run build

# copy build directory to express-app directory
cp -R /build/* ../express-app/build
```

### Run with Docker

Just run the docker-compose on your local machine.

```
docker-compose up -d --build
```

### Manual set up

Run the bash script to configure the .env files

```shell
bash configure_server.sh
```

Now its time to install all dependencies.

Prerequisites: Node, Python 3, Linux

```shell
# install dependencies for node.js express server
cd ../express-app
npm install
```

We use [poetry](https://python-poetry.org/docs/#installation) to install the Flask API.

```shell
cd ../fifa-api

poetry install
poetry run python api.py

# run "gunicorn gettingstarted.wsgi" if you are on linux and want to use flask for production
```

Now we can go back to our node.js app and run it in our network.

```shell
cd ../express-app
npm run start
```

### Nginx

Make sure that you have configured your firewall correctly to allow incoming requests from your network.
You can use some useful links and commands in the install guide file. I´ve linked some articles which explain how you can set up a nginx reverse proxy to deploy the server on your local network.
