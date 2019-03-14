CREATE DATABASE `blog-restify`;
USE `blog-restify`;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
`password` VARCHAR(40) NOT NULL);

CREATE TABLE categories(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(200));

INSERT INTO users (`name`, email, `password`) VALUES('Admin', 'admin@mail.com', SHA1('123'));