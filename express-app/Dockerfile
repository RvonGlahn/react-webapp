FROM node:16-alpine

# Create node server directory
WORKDIR /server

# Install node server dependencies
COPY package.json ./
RUN npm install
COPY . .
RUN mkdir -p /server/logs
RUN touch /server/logs/access.log

EXPOSE $NODE_EXPOSED_PORT
CMD [ "node", "server.js"]