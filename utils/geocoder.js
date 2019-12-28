const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: 'Jq3oc5hHUGynZ54R67IqkizAI8dfMMK9',
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
