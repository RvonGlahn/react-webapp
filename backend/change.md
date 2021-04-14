# Ideas

#### Commands

export NODE_ENV=production
SET NODE_ENV=production
node app.js
npm run build

#### Cross-Platform

var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
apt-get remove ––purge iceweasel

#### Raspi

https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/
https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

#### Security

https://www.npmjs.com/package/express-limiter for DoS
https://www.npmjs.com/package/csurf for CSRF
https://www.npmjs.com/package/ratelimiter for login
