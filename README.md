# Rest-api-with-NODE
Develop simple restful application with NODE js
This is a simple Restful API application with NODEjs

Install Node.js
https://nodejs.org/en/

Install Mongodb
https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/

To run  application in MAC
Need to run 'mongod' command in Terminal

Before running 'mongod' need to run below commands
1) mkdir -p /data/db
Grant permission to /data/db folder
2) whoami
 will give your username 
3) sudo chown 'username' /data/db
when you cilick enter it will ask password to grant permissions

In case if you download mongodb in separate folder you need to set PATH
4) export PATH='mongodb path name'/bin:$PATH
5) mongod

once you see the text waiting for connection

you need to run the mongo db server using the command

1) mongo

To run the application

run npm start
