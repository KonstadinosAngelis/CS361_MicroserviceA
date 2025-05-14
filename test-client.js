const http = require('http');

// Define the planet to query
const planet = 'mars';

// Set up the request options
const options = {
  hostname: 'localhost',
  port: 3000,
  path: `/trip-info?planet=${planet}`,
  method: 'GET',
};

// Make the HTTP GET request
const req = http.request(options, res => {
  let data = '';

  console.log(`Status Code: ${res.statusCode}`);

  // Listen for data chunks
  res.on('data', chunk => {
    data += chunk;
  });

  // When the full response has been received
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("Received trip data:");
      console.log(json);
      
    } catch (err) {
      console.error("Failed to parse response:", err.message);
    }
  });
});

// Handle network or connection errors
req.on('error', error => {
  console.error("Request failed:", error.message);
});

// Send the request
req.end();