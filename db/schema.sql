DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- creating department table
CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
)
