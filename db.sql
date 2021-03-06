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

CREATE TABLE posts(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(70) NOT NULL,
post VARCHAR(5000) NOT NULL,
category_id INT NOT NULL,
`image` VARCHAR(5000));

CREATE TABLE comments(
id INT PRIMARY KEY AUTO_INCREMENT,
`comment` VARCHAR(5000) NOT NULL,
`name` VARCHAR(100) NOT NULL,
post_id INT NOT NULL);

INSERT INTO users (`name`, email, `password`) VALUES('Admin', 'admin@mail.com', SHA1('123'));