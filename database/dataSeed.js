// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const db = require('./index.js'); // MySQL DB connection lives at this path
const faker = require('faker'); // Faker module used to generate random host names & listing descriptions

// --- CREATE LISTINGS DATA --- //

// 100 Real Airbnb Listing Titles
// Filtered using JSON data from:
// https://public.opendatasoft.com/explore/dataset/airbnb-listings/
const titles = [
  "Brunz Beach Shack",
  "Sanctuary in the Pocket-Bunk House",
  "A Charming Garden Cottage in Nobe",
  "Peaceful central waterfront home",
  "Beachfarm",
  "Country Studio - heavenly location",
  "Stylish, Private, Garden Studio",
  "Breathtaking Views!",
  "Creekside Cottage in Garden Oasis..",
  "Lovely 3 BR, 2 BA Piedmont home",
  "Deer Crossing in the Oakland Hills",
  "Large Craftsman Flat in Rockridge",
  "Small studio next to Champs Elysées",
  "Sunny Parisian flat in Batignolles",
  "Luxury 1BR - Arc de Triomphe/Parc Monceau",
  "Studio - Quartier Levis - Paris 17",
  "Stunning bedroom in brilliant flat!",
  "A spacious room with a parisian garden view",
  "Lovely studio two steps away from the Eiffel Tower",
  "BEST LOCATION / PERFECT FOR 2",
  "LOVELY FLAT NEAR EIFFEL TOWER",
  "HEART OF PARIS EIFFEL 25m2",
  "Cosy studio w/bath - Eiffel Tower",
  "Chic district, B&B.",
  "Typical & charming Parisian flat",
  "Typical Parisian Apartment Center",
  "Studio calme, plein de charme.",
  "Le Ô des toits, Bed and Breakfast",
  "Loft 2 bedroom Val de Grâce/Cochin",
  "HEART OF PARIS OPERA-J, Luxury APT",
  "Studio near Louvre & Palais Royal",
  "Charming typical Parisian studio AC",
  "CHARMING & SPACIOUS FLAT WITH VIEW",
  "Appartement Quartier Montparnasse",
  "Amazing View, Lovely Nest in Marais",
  "Art Penthouse - TERRACE (Marais)",
  "Amazing view in the City of Light.",
  "chambre agréable tout confort Quartier du Marais",
  "Beautiful brand new studio Marais",
  "Bright and spacious family flat",
  "Nid à Paris pour voyageuse curieuse",
  "Rome penthouse a few steps from St.",
  "Mini appartamento con disponibilità  di posto auto",
  "Homey Room close Gemelli Hospital",
  "Stefania's Terrace, near Vatican",
  "JT's BNB",
  "Charming Private Spanish Casita",
  "Comfortable Private Room With Bath",
  "Clean Minimalist Room",
  "Beachfront Condo on Boardwalk with A/C",
  "Beautiful private Master Suite",
  "Linda Vista Quiet Retreat Sleeps 4",
  "1BR Sunny Apartment in Little Italy",
  "Great Location Cozy Queen Room",
  "Serene Central Sweet Suite",
  "Stunning Views2 near Haight&Castro!",
  "garden retreat",
  "1885 Victorian - Garden Apartment",
  "Quiet residential home near the fun",
  "Modern, Private Luxury Guest BR, BA",
  "Harry Potter themed Bunk Beds in SOMA",
  "Potrero Hill Posh—Private Room & Bath in View Home",
  "2 BR Apt. Work-Play 5* Location @ Potrero Hill",
  "1-BR Home in Sunny Potrero Hill",
  "Roomy oasis in trendy Dolores Park/Castro/Mission",
  "Perfect Castro  Location",
  "This is my house!",
  "B&B CAPPUCCINO Camera tripla Family",
  "Flavia's House",
  "Cozy and bright studio with terrace in Rome",
  "Cherokee Point ~ Private Bed/Bath",
  "1 central in beautiful San Diego",
  "Deluxe Private room in Otay Ranch",
  "Cozy, cool,  private very heart of South Park",
  "Private Entry, Master bed & bath",
  "Vintage Spanish Flat in heart of SD",
  "The Best Cottage in North Park!",
  "Charming Ocean Beach cottage",
  "Private Luxury Suite w/Sun Deck",
  "Spacious Private Room&Bath&Parking",
  "Ideal Home for Small Reunions",
  "8th Ave Condos Modern 1BD 3",
  "8th Ave Condos Modern 1BD",
  "Brick walls, Historic District DT",
  "Private Suite w/ Separate Entrance",
  "Central location/1900s Home w/patio",
  "Great Location. 98 Walkscore 2",
  "Pike's Place. 98 Walkscore 2",
  "Loft con terrazzo in zona pigneto",
  "Confortevole appartamento Pigneto",
  "Cozy room with free bikes !",
  "MySuiteInRome - Quadraro Private Suite",
  "KORN & SBUTEGA HOME",
  "Holiday house 'Ciritorno'",
  "Charming Cottages by the Cove",
  "Quaint room with shared bathroom",
  "Closest 2BR to Beach in LJ Shores!",
  "Hip Flat in Normal Heights",
  "Private Studio In Normal Heights",
  "Historic South Park Private Room"
];

// HELPER: Generate Random # Between num1 & num2
const generateCount = function (num1, num2) {
  return Math.floor(Math.random() * num1) + num2;
};

// MAIN FUNCTION: Seed Listings Table
const seedListings = function () {
  for (let i = 0; i < 100; i++) {
    let title = titles[i];
    let hostName = faker.name.firstName();
    let description = faker.lorem.paragraphs() + faker.lorem.paragraphs();
    let guestCount = generateCount(24, 2);
    let roomCount = generateCount(10, 1);
    let bedCount = generateCount(10, 1);
    let bathCount = generateCount(15, 1);
    let queryStr = `INSERT INTO listings (title, host, description, guests, rooms, beds, baths) VALUES ("${title}", '${hostName}', '${description}', ${guestCount}, ${roomCount}, ${bedCount}, ${bathCount})`;
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

// Path to S3 Bucket w/ Icon Images
const s3 = 'https://airbeebee.s3-us-west-1.amazonaws.com/';

// 26 Amenities (real from Airbnb)
// w/ URLs to icon images
const amenities = [
  { name: 'checkIn24Hrs', url: `${s3}24hrcheckin.JPG` },
  { name: 'airConditioning', url: `${s3}ac.JPG` },
  { name: 'alarmClock', url: `${s3}24hrcheckin.JPG` },
  { name: 'balcony', url: `${s3}balcony.JPG` },
  { name: 'bathtub', url: `${s3}bathtub.JPG` },
  { name: 'bbq', url: `${s3}kitchen.JPG` },
  { name: 'cableTV', url: `${s3}cabletv.JPG` },
  { name: 'catsAllowed', url: `${s3}cats.JPG` },
  { name: 'kitchenUtensils', url: `${s3}kitchen.JPG` },
  { name: 'dogsAllowed', url: `${s3}dogs.JPG` },
  { name: 'freeParking', url: `${s3}parking.JPG` },
  { name: 'freeWifi', url: `${s3}wifi.JPG` },
  { name: 'hairDryer', url: `${s3}hairdryer.JPG` },
  { name: 'heating', url: `${s3}heatfire.JPG` },
  { name: 'hotTub', url: `${s3}hottub.JPG` },
  { name: 'fireplace', url: `${s3}heatfire.JPG` },
  { name: 'kingSizeBed', url: `${s3}bed.JPG` },
  { name: 'microwave', url: `${s3}kitchen.JPG` },
  { name: 'pool', url: `${s3}hottub.JPG` },
  { name: 'oven', url: `${s3}kitchen.JPG` },
  { name: 'restaurant', url: `${s3}kitchen.JPG` },
  { name: 'shopping', url: `${s3}shopping.JPG` },
  { name: 'shower', url: `${s3}bathtub.JPG` },
  { name: 'smokeDetector', url: `${s3}heatfire.JPG` },
  { name: 'sofa', url: `${s3}sofa.JPG` },
  { name: 'stereo', url: `${s3}stereo.JPG` }
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
  { name: 'Outstanding Hospitality', url: `${s3}star.JPG` },
  { name: 'Cancellation Policy', url: `${s3}calendar.JPG` },
  { name: 'Entire Home', url: `${s3}home.JPG` },
  { name: 'Self Check-In', url: `${s3}lock.JPG` },
  { name: 'Enhanced Clean', url: `${s3}clean.JPG` },
  { name: 'Clean & Tidy', url: `${s3}clean.JPG` },
  { name: 'Superhost', url: `${s3}star.JPG` }
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

const createAmenityRelationships = function() {
  for (let i = 1; i <= 100; i++) {
    let amenityCount = generateCount(17, 10);
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

const createHighlightRelationships = function() {
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
