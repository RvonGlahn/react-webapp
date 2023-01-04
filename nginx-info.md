## Installation on Ubuntu Server

This is a reminder for what is needed to install all requirements to run this server.
For further info take a look at the linked tutorials.

### Firewall

-   sudo apt install [ufw](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04-de)
    -   sudo ufw default deny incoming
    -   sudo ufw default allow outgoing
    -   sudo ufw allow ssh
    -   sudo ufw enable
    -   sudo ufw status

### Nginx

-   sudo apt update
-   sudo apt install [nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)
-   sudo ufw app list
    -   sudo ufw allow 'Nginx HTTP'
-   systemctl status nginx
-   sudo systemctl start/stop/restart nginx
-   sudo nginx -t
-   [Reverse Proxy](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)

### Node.js

-   cd ~
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
-   sudo apt install [nodejs](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)
-   sudo apt install build-essential

### PM2

-   sudo npm install pm2@latest -g
-   [pm2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04) start server.js
-   pm2 startup systemd
-   sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u <username> --hp /home/<username>

### [Lets Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

-   sudo apt install certbot python3-certbot-nginx
-   sudo ufw allow 'Nginx Full'
    sudo ufw delete allow 'Nginx HTTP'
-   sudo certbot --nginx -d example.com -d www.example.com
-   sudo systemctl status certbot.timer
-   sudo certbot renew --dry-run
