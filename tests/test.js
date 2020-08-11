const axios = require('axios');
// const generateCount = require('../database/dataSeed.js');

const func = () => {
  return 1;
};

describe('Jest Setup should be working', () => {
  test('Jest should correctly test a basic function', () => {
    expect(func()).toBe(1);
  });
});

// describe('API calls to server should receive the correct response', () => {
//   test('Should fetch correct info for Listing 1', () => {

//   });
// });

// describe('Generate Count should return a random number within range', () => {
//   test('Should return a number between 1 and 5, inclusive', () => {
//     let value = generateCount(5, 1);
//     expect(value).toBeGreaterThan(0);
//   })
// });
