# Web server

Web server based on React-APP, Node.js express and Flask for Python API.

### Set Up

Make sure to first install the Flask API form [here](https://github.com/RvonGlahn/FIFA_search). 
The Flask API repository needs to be in the same folder as the Server repository.

```shell
cd path/to/your/server/directory

git clone https://github.com/RvonGlahn/FIFA_search.git
git clone https://github.com/RvonGlahn/react-webapp.git
```

After cloning the repositories run the bash script to configure the .env files

```shell
cd react-webapp
bash configure_server.sh
```

No its time to install all dependencies.

Prerequisites: Node, Python 3, Linux

```shell
# install react-app and build it
cd react-webapp/webdev
npm install
npm run build

# install dependencies for node.js express server
cd ../server
npm install
```

We use [poetry](https://python-poetry.org/docs/#installation) to install the Flask API.

```shell
cd ../../FIFA_search

poetry install
poetry run python api.py

# run "gunicorn gettingstarted.wsgi" if you are on linux and want to duse flask for production
```

Now we can go back to our node.js app and run it in our network.

```shell
cd ../react-webapp/server
npm run start
```



Make sure that you have configured your firewall correctly to allow incoming requests from your network.
You can use some useful links and commands in the install guide file. I´ve linked some articles which explain how you can set up a nginx reverse proxy to deploy the server in your local network. 
