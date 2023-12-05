CREATE DATABASE library;

-- Path: Backend/database.sql

CREATE TABLE staff (
  staff_id SERIAL PRIMARY KEY,
  staff_name VARCHAR(100) NOT NULL
);
CREATE TABLE authentication_system (
  
  loginid varchar(50) NOT NULL,
  pwd varchar(255) NOT NULL,
  staff_id int NOT NULL references staff(staff_id),
  PRIMARY KEY (loginid)
);


-- Table for Members/Readers
CREATE TABLE members (
  member_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Table for Authors
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  author_name VARCHAR(100) NOT NULL
);


CREATE TABLE book (
    isbn varchar(13) NOT NULL,
    author_id int NOT NULL references authors(author_id),
    title varchar(255) NOT NULL,
    category varchar(50) NOT NULL,
    price decimal(10,2) NOT NULL,
    available int NOT NULL,
    total int NOT NULL,
    staff_id int NOT NULL references staff(staff_id),
    PRIMARY KEY (isbn)
);

-- Table for Issues/Returns
CREATE TABLE issues_returns (
  issue_return_id SERIAL PRIMARY KEY,
  member_id INT REFERENCES members(member_id) ON DELETE CASCADE,
  isbn varchar(13) REFERENCES book(isbn) ON DELETE CASCADE,
  issue_date DATE,
  return_date DATE,
  status VARCHAR(20) NOT NULL
);

