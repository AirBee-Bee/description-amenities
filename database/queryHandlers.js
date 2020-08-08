// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const db = require('./index.js'); // MySQL DB Connection

module.exports = {

  // Fetch listing data by ID
  getListingByID: function (id, callback) {
    let queryStr = `SELECT * FROM listings WHERE (ID = ${id})`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  // Fetch Amenities associated with listing ID
  getAmenitiesByListingID: function (id, callback) {
    let queryStr = `SELECT * FROM amenities a INNER JOIN listings_amenities la ON la.listing_ID = ${id} AND a.ID = la.amenity_ID`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  // Fetch Featured Amenities associated with listing ID
  getHighlightsByListingID: function (id, callback) {
    let queryStr = `SELECT * FROM highlights h INNER JOIN listings_highlights lh ON lh.listing_ID = ${id} AND h.ID = lh.highlight_ID`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

};
