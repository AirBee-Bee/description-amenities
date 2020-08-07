// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const db = require('./index.js'); // MySQL DB Connection

module.exports = {

  // Fetch listing data by ID
  getListingByID: function(id, callback) {
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
  getAmenitiesByListingID: function(id, callback) {

  },

  // Fetch Featured Amenities associated with listing ID
  getHighlightsByListingID: function(id, callback) {

  }

};
