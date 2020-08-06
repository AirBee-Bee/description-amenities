DROP DATABASE IF EXISTS airbeebee;

CREATE DATABASE airbeebee;

USE airbeebee;

CREATE TABLE listings (
  ID INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  host VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  guests INT NOT NULL,
  rooms INT NOT NULL,
  beds INT NOT NULL,
  baths INT NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE amenities (
  ID INT AUTO_INCREMENT,
  type VARCHAR(100) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE listings_amenities (
  ID INT AUTO_INCREMENT,
  listing_ID INT NOT NULL,
  amenity_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (listing_ID) REFERENCES listings (id),
  FOREIGN KEY (amenity_ID) REFERENCES amenities (id)
);

CREATE TABLE highlights (
  ID INT AUTO_INCREMENT,
  type VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE listings_highlights (
  ID INT AUTO_INCREMENT,
  listing_ID INT NOT NULL,
  highlight_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (listing_ID) REFERENCES listings (id),
  FOREIGN KEY (highlight_ID) REFERENCES highlights (id)
);
