# CS361_MicroserviceA Trip Info Microservice

This microservice provides mission planning data for celestial bodies. It returns distance from Earth, estimated travel duration, and required fuel.

## How to Request Data from the API

To programmatically request data, send an HTTP **GET** request to the following endpoint: GET /trip-info?planet=PLANET_NAME

Replace `PLANET_NAME` with one of the supported choices:
- `moon`
- `mars`
- `venus`
- `jupiter`

### ✅ Example Call Structure (JavaScript)
```js
fetch("http://localhost:3000/trip-info?planet=moon")
  .then(res => res.json())
  .then(data => {
    console.log("Trip Info:", data);
  })
  .catch(err => {
    console.error("Request failed:", err);
  });
```

### ✅ Successful Response
```json
{
  "distance": 238900,
  "duration": "3 days",
  "fuel": 5000
}
```

### ❌ Error Response (Invalid or unsupported planet)
```json
{
  "error": "Invalid Destination"
}
```

### ❌ Error Response (Missing parameter)
```json
{
  "error": "Invalid or missing 'planet' parameter"
}
```
