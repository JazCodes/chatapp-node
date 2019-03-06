CREATE DATABASE IF NOT EXISTS chatapp;

USE chatapp;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS messages;

CREATE TABLE user(
id INT AUTO_INCREMENT,
username VARCHAR(255),
password VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE messages(
id INT AUTO_INCREMENT,
id_sender INT,
id_receiver INT,
body VARCHAR(255), #the username and the password
PRIMARY KEY (id)
FOREIGN KEY (id_sender) REFERENCES user(id),
FOREIGN KEY (id_receiver) REFERENCES user(id)
);


