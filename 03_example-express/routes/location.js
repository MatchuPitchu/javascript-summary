const express = require('express');

// create a router
const router = express.Router();

const locationStorage = {
  locations: [],
};

// POST Request to /add-location will come to following cb function
router.post('/add-location', (req, res, next) => {
  const id = Math.random();

  locationStorage.locations.push({
    id,
    address: req.body.address,
    coords: {
      lat: req.body.lat,
      lng: req.body.lng,
    },
  });
  // send back a reponse to the client
  res.json({ message: 'Location stored', id });
});

// GET Request with dynamic parameter (of name of your choice)
router.get('/location/:id', (req, res, next) => {
  const locationId = +req.params.id;
  const location = locationStorage.locations.find((location) => location.id === locationId);
  if (!location) {
    return res.status(404).json({ message: 'Location not found' });
  }
  res.json({ address: location.address, coordinates: location.coords });
});

// export router
module.exports = router;
