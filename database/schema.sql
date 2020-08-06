DROP DATABASE IF EXISTS airbeebee;

CREATE DATABASE airbeebee;

USE airbeebee;

CREATE TABLE listings (
  ID INT AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

-- ADD TO LISTINGS
-- name
-- host
-- description
-- # of guests
-- # of rooms
-- # of beds
-- # of baths

-- CREATE AMENITIES
-- ID (primary)
-- type
-- icon (URL)

-- CREATE LISTINGS_AMENITIES
-- ID (primary)
-- Listing_ID (FK)
-- Amenity_ID (FK)

-- CREATE HIGHLIGHTS
-- ID (primary)
-- amenity
-- icon (URL)

-- CREATE LISTINGS_HIGHLIGHTS
-- ID (primary)
-- Listing_ID
-- Highlight_ID