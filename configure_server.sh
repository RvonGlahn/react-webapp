#!/bin/bash

# make script executbale
# chmod +x ~/configure_server.sh


read -p "Insert IP of your current device: " DEVICE_IP

read -p "Node.js Server Port Number: " SERVER_PORT

read -p "Flask API Port Number: " API_PORT

read -p "Proxy Port Number: " PROXY_PORT


# delete old .env files 
if [ -f /webdev/.env ]; then
	rm /webdev/.env
	
if [ -f /server/.env ]; then
	rm /server/.env
	
if [ -f /api/.env ]; then
	rm /api/.env
	

# create .env file in react app directory
while read line; do
	if [[ $line == *"REACT_APP_SERVER_URL"* ]]; then
		echo "REACT_APP_SERVER_URL=${DEVICE_IP}"
		
	elif [[ $line == *"REACT_APP_FLASK_URL"* ]]; then
		echo "REACT_APP_FLASK_URL=${DEVICE_IP}:${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < /webdev/.env.default > /webdev/.env
}



# create .env file in node.js directory
while read line; do
	if [[ $line == *"SERVER_URL"* ]]; then
		echo "HOST=${DEVICE_IP}"
		
	elif [[ $line == *"SERVER_PORT"* ]]; then
		echo "SERVER_PORT=${SERVER_PORT}"
		
	elif [[ $line == *"PROXY_URL"* ]]; then
		echo "PROXY_URL=${DEVICE_IP}"
		
	elif [[ $line == *"PROXY_PORT"* ]]; then
		echo "PROXY_PORT=${PROXY_PORT}"		
		
	elif [[ $line == *"FLASK_URL"* ]]; then
		echo "FLASK_URL=${DEVICE_IP}:${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < /webdev/.env.default > /webdev/.env
}


# cretae .env file in Flask API directory
while read line; do
	if [[ $line == *"FLASK_RUN_HOST"* ]]; then
		echo "FLASK_RUN_HOST=${DEVICE_IP}"
		
	elif [[ $line == *"FLASK_RUN_PORT"* ]]; then
		echo "FLASK_RUN_PORT:${API_PORT}"
		
    else 
		echo "${line}"
	fi
done < /webdev/.env.default > /webdev/.env
}
