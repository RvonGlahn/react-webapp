#!/bin/bash

# make script executbale
# chmod +x ~/configure_server.sh

IP=$(hostname -I)

echo "This script helps to configure the .env files for react app, flask api and express server."
echo "Make shure that you´ve already cloned the repository for the flask api!"
echo "-------------------------------"
echo "Your local IP is: $IP"
echo ""

read -p "Insert IPv4 of your current device: " DEVICE_IP

read -p "Node.js Server Port Number: " SERVER_PORT

read -p "Flask API Port Number: " API_PORT

read -p "Proxy Port Number: " PROXY_PORT

if [ ! -d /server/logs ]; then
	mkdir server/logs
fi

# delete old .env files 
if [ -f /webdev/.env ]; then
	rm /webdev/.env
fi
	
if [ -f /server/.env ]; then
	rm /server/.env
fi

if [ -f /api/.env ]; then
	rm /api/.env
fi

# create .env file in react app directory
while read line; do
	if [[ $line == *"REACT_APP_SERVER_URL"* ]]; then
		echo "REACT_APP_SERVER_URL=${DEVICE_IP}"
		
	elif [[ $line == *"REACT_APP_FLASK_URL"* ]]; then
		echo "REACT_APP_FLASK_URL=${DEVICE_IP}:${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < webdev/.env.default > webdev/.env


# create .env file in node.js directory
while read line; do
	if [[ $line == *"SERVER_URL"* ]]; then
		echo "HOST=${DEVICE_IP}"
		
	elif [[ $line == *"SERVER_PORT"* ]]; then
		echo "PORT=${SERVER_PORT}"
		
	elif [[ $line == *"PROXY_URL"* ]]; then
		echo "PROXY_URL=${DEVICE_IP}"
		
	elif [[ $line == *"PROXY_PORT"* ]]; then
		echo "PROXY_PORT=${PROXY_PORT}"		
		
	elif [[ $line == *"FLASK_URL"* ]]; then
		echo "FLASK_URL=${DEVICE_IP}:${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < server/.env.default > server/.env



# cretae .env file in Flask API directory
while read line; do
	if [[ $line == *"FLASK_RUN_HOST"* ]]; then
		echo "FLASK_RUN_HOST=${DEVICE_IP}"
		
	elif [[ $line == *"FLASK_RUN_PORT"* ]]; then
		echo "FLASK_RUN_PORT=${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < ../FIFA_search/.env.default > ../FIFA_search/.env