CREATE DATABASE library;

-- Path: Backend/database.sql

CREATE TABLE book (
  isbn varchar(13) NOT NULL,
  authno int NOT NULL references author(authno),
    title varchar(255) NOT NULL,
    b_edition int NOT NULL,
    category varchar(50) NOT NULL,
    price decimal(10,2) NOT NULL,
    readerid int references reader(userid),
    publisherid int references publisher(publisherid),
    staffid int NOT NULL references staff(staffid),
    PRIMARY KEY (isbn),
);

CREATE TABLE authentication_system (
  
  loginid varchar(50) NOT NULL,
  pwd varchar(255) NOT NULL,
  staffid int NOT NULL references staff(staffid),
  PRIMARY KEY (loginid),
);

CREATE TABLE author (
  authno int NOT NULL,
  authname varchar(50) NOT NULL,
  PRIMARY KEY (authno),
);

CREATE TABLE publisher (
  publisherid int NOT NULL,
  publishername varchar(50) NOT NULL,
  year int NOT NULL,
  PRIMARY KEY (publisherid),
);

CREATE TABLE reader (
  userid int NOT NULL,
  email varchar(255) NOT NULL,
  firstname varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
  address varchar(255) NOT NULL,
  phone varchar(15) NOT NULL,
  PRIMARY KEY (userid),
);

CREATE TABLE staff (
  staffid int NOT NULL,
  name varchar(100) NOT NULL
  PRIMARY KEY (staffid),
);

CREATE TABLE reports (
  reg_no int NOT NULL,
  userid int NOT NULL references reader(userid),
  book_no varchar(13) NOT NULL references book(isbn),
  issuereturndate date NOT NULL,
  staffid int NOT NULL references staff(staffid),
  PRIMARY KEY (reg_no),
);

CREATE TABLE reserve_return (
  reserverdate date NOT NULL,
  duedate date NOT NULL,
  returndate date NOT NULL,
  readerid int NOT NULL references reader(userid),
  bookid varchar(13) NOT NULL references book(isbn),
  PRIMARY KEY (reg_no),
);