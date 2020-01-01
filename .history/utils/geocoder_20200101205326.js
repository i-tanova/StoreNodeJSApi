const NodeGeocoder = require('node-geocoder');

var options = {
    provider: process.env.GEOCODE_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODE_API_KEY,
    formatter: null 
  };
   
  var geocoder = NodeGeocoder(options);
  
  module.exports = geocoder;

