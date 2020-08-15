// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const db = require('./index.js'); // MySQL DB connection lives at this path
const faker = require('faker'); // Faker module used to generate random host names & listing descriptions

// Path to S3 Bucket w/ Icon Images
const s3 = 'https://airbeebee.s3-us-west-1.amazonaws.com/';

// --- CREATE LISTINGS DATA --- //

// Assortment of realistic Airbnb titles
const titles = [
  'Entire house',
  'Entire apartment',
  'Private room',
  'Entire cottage',
  'Barn home',
  'Penthouse apartment',
  'Studio apartment',
  'Private yacht',
  'Entire cabin',
  'Entire guesthouse',
  'Private room in house',
  'Private room in apartment',
  'Tiny house',
  'Camper/RV',
  'Earth house'
];

// 50 Random user profile photos from randomuser.me
let hostPhotos = [];
// Seed hostPhotos array with S3 image links
for (let i = 1; i <= 50; i++) {
  hostPhotos.push(`${s3}photo${i}.jpg`)
}

// HELPER: Generate Random # Between num1 & num2
const generateCount = function (num1, num2) {
  return Math.floor(Math.random() * num1) + num2;
};

// MAIN FUNCTION: Seed Listings Table
const seedListings = function () {
  for (let i = 0; i < 100; i++) {
    let title = titles[generateCount(15, 0)];
    let photo = hostPhotos[generateCount(50, 0)];
    let hostName = faker.name.firstName();
    let description = `${faker.lorem.paragraphs()} ${faker.lorem.paragraphs()} ${faker.lorem.paragraphs()}`;
    let roomCount = generateCount(3, 1);
    let bedCount = Math.ceil(roomCount * 1.25);
    let guestCount = bedCount * 2;
    let bathCount = Math.ceil(roomCount * 1.25);
    let queryStr = `INSERT INTO listings (title, host, photo, description, guests, rooms, beds, baths) VALUES ("${title}", '${hostName}', '${photo}', '${description}', ${guestCount}, ${roomCount}, ${bedCount}, ${bathCount})`;
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Added ${title} to Listings Table`);
      }
    })
  }
};
// Invoke Listings seed function
seedListings();

// --- CREATE AMENITIES DATA --- //

// 26 Amenities (real from Airbnb)
// w/ URLs to icon images
const amenities = [
  // Basic
  { name: '24 Hour Check-In', url: `${s3}24hrcheckin.JPG` },
  { name: 'Air Conditioning', url: `${s3}ac.JPG` },
  { name: 'Cable TV', url: `${s3}cabletv.JPG` },
  { name: 'Free WiFi', url: `${s3}wifi.JPG` },
  { name: 'Heating', url: `${s3}heatfire.JPG` },
  { name: 'Smoke Detector', url: `${s3}heatfire.JPG` },
  // Facilities
  { name: 'Free Parking', url: `${s3}parking.JPG` },
  { name: 'Pool', url: `${s3}hottub.JPG` },
  { name: 'Hot Tub', url: `${s3}hottub.JPG` },
  { name: 'Fireplace', url: `${s3}heatfire.JPG` },
  { name: 'Balcony', url: `${s3}balcony.JPG` },
  { name: 'Cats Allowed', url: `${s3}cats.JPG` },
  { name: 'Dogs Allowed', url: `${s3}dogs.JPG` },
  { name: 'Restaurant Nearby', url: `${s3}kitchen.JPG` },
  { name: 'Shopping Nearby', url: `${s3}shopping.JPG` },
  // Dining
  { name: 'Kitchen Utensils', url: `${s3}kitchen.JPG` },
  { name: 'Barbecue', url: `${s3}kitchen.JPG` },
  { name: 'Microwave', url: `${s3}kitchen.JPG` },
  { name: 'Oven', url: `${s3}kitchen.JPG` },
  // Bed and Bath
  { name: 'King Size Bed', url: `${s3}bed.JPG` },
  { name: 'Shower', url: `${s3}bathtub.JPG` },
  { name: 'Bathtub', url: `${s3}bathtub.JPG` },
  { name: 'Hair Dryer', url: `${s3}hairdryer.JPG` },
  { name: 'Alarm Clock', url: `${s3}24hrcheckin.JPG` },
  { name: 'Sofa', url: `${s3}sofa.JPG` },
  { name: 'Stereo', url: `${s3}stereo.JPG` }
];

// Seed Amenities Table
amenities.forEach(amenity => {
  let queryStr = `INSERT INTO amenities (name, url) VALUES ('${amenity.name}', '${amenity.url}')`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Added ${amenity.name} Row to Amenities Table`);
    }
  });
});

// -- CREATE HIGHLIGHTS DATA --- //

// 7 Highlighted Amenities (real from Airbnb)
// w/ URLs to icon images
const highlights = [
  { name: 'Outstanding hospitality', url: `${s3}star.JPG` },
  { name: 'Cancellation policy', url: `${s3}calendar.JPG` },
  { name: 'Entire home', url: `${s3}home.JPG` },
  { name: 'Self Check-In', url: `${s3}lock.JPG` },
  { name: 'Enhanced clean', url: `${s3}clean.JPG` },
  { name: 'Clean & Tidy', url: `${s3}clean.JPG` },
  { name: 'Superhost', url: `${s3}star.JPG` },
  { name: 'Amenities for everyday living', url: `${s3}wifi.JPG` }
];

// Seed Highlights Table
highlights.forEach(highlight => {
  let queryStr = `INSERT INTO highlights (name, url) VALUES ('${highlight.name}', '${highlight.url}')`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Added ${highlight.name} Row to Highlights Table`);
    }
  })
});

// -- SEED LISTINGS_AMENITIES -- //

const createAmenityRelationships = function () {
  for (let i = 1; i <= 100; i++) {
    let amenityCount = generateCount(7, 20);
    let amenityIndexes = [];
    while (amenityIndexes.length < amenityCount) {
      let index = generateCount(26, 0);
      if (!amenityIndexes.includes(index)) {
        amenityIndexes.push(index);
      }
    }
    for (let j = 0; j < amenityIndexes.length; j++) {
      let queryStr = `INSERT INTO listings_amenities (listing_ID, amenity_ID) VALUES (${i}, ${amenityIndexes[j] + 1})`;
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Created Relationship Between Listing ID ${i} and Amenity ID ${amenityIndexes[j] + 1}`);
        }
      })
    }
  }
};

// Invoke Listings_Amenities seed function
createAmenityRelationships();

// -- SEED LISTINGS_HIGHLIGHTS -- //

const createHighlightRelationships = function () {
  for (let i = 1; i <= 100; i++) {
    let highlightCount = generateCount(3, 2);
    let highlightIndexes = [];
    while (highlightIndexes.length < highlightCount) {
      let index = generateCount(7, 0);
      if (!highlightIndexes.includes(index)) {
        highlightIndexes.push(index);
      }
    }
    for (let j = 0; j < highlightIndexes.length; j++) {
      let queryStr = `INSERT INTO listings_highlights (listing_ID, highlight_ID) VALUES (${i}, ${highlightIndexes[j] + 1})`;
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Created Relationship Between Listing ID ${i} and Highlight ID ${highlightIndexes[j] + 1}`);
        }
      })
    }
  }
};

// Invoke Listings_Amenities seed function
createHighlightRelationships();

// End the connection with Air Bee & Bee DB
db.end((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connection Terminated');
  }
});
