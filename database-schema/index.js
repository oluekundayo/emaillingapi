const { database } = require("../config/mysql");
// const { buyerTable, sellerTable
//         } = require("../config");

module.exports = `
CREATE DATABASE IF NOT EXISTS ${database} CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';
USE ${database};
CREATE TABLE IF NOT EXISTS user_tbl (
    id BIGINT(20) NOT NULL AUTO_INCREMENT,
    admin VARCHAR(80) NOT NULL,
    role VARCHAR(80) NOT NULL,
    fullname VARCHAR(225) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(225) NOT NULL,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modified_last TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT unique_user UNIQUE (email)
);
CREATE TABLE IF NOT EXISTS control_user_tbl (
    id BIGINT(20) NOT NULL AUTO_INCREMENT,
    last_name VARCHAR(225) NOT NULL,
    middle_name VARCHAR(225) NULL,
    first_name VARCHAR(225) NOT NULL,
    image_url TEXT NOT NULL,
    year_grad VARCHAR(25) NOT NULL,
    month_grad VARCHAR(25) NOT NULL,
    faculty VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    level_no VARCHAR(255) NOT NULL,
    certificate_type VARCHAR(255) NOT NULL,
    control_no VARCHAR(255) NOT NULL,
    matric_no VARCHAR(255) NULL,
    PRIMARY KEY (id)
);`;
