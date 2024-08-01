const express = require('express');
const router = express.Router();
const Watch = require('../models.js/Watch');

// Get all watches
router.get('/', async (req, res) => {
  try {
    const watches = await Watch.find();
    res.json(watches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a watch by ID
router.get('/:id', async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (watch == null) {
      return res.status(404).json({ message: 'Cannot find watch' });
    }
    res.json(watch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new watch
router.post('/', async (req, res) => {
  const watch = new Watch({
    brand: req.body.brand,
    model: req.body.model,
    referenceNumber: req.body.referenceNumber,
    price: req.body.price,
    movement: req.body.movement,
    caseMaterial: req.body.caseMaterial,
    caseDiameter: req.body.caseDiameter,
    caseThickness: req.body.caseThickness,
    dialColor: req.body.dialColor,
    crystal: req.body.crystal,
    strapMaterial: req.body.strapMaterial,
    waterResistance: req.body.waterResistance,
    features: req.body.features,
    yearOfManufacture: req.body.yearOfManufacture,
    limitedEdition: req.body.limitedEdition,
    serialNumber: req.body.serialNumber,
    countryOfOrigin: req.body.countryOfOrigin,
    warranty: req.body.warranty,
    images: req.body.images,
    manuals: req.body.manuals,
    reviews: req.body.reviews,
    dateAdded: req.body.dateAdded,
    lastUpdated: req.body.lastUpdated,
    addedBy: req.body.addedBy
  });

  try {
    const newWatch = await watch.save();
    res.status(201).json(newWatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a watch by ID
router.patch('/:id', async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (watch == null) {
      return res.status(404).json({ message: 'Cannot find watch' });
    }

    if (req.body.brand != null) {
      watch.brand = req.body.brand;
    }
    if (req.body.model != null) {
      watch.model = req.body.model;
    }
    // ... update other fields similarly ...

    watch.lastUpdated = Date.now();

    const updatedWatch = await watch.save();
    res.json(updatedWatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a watch by ID
router.delete('/:id', async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (watch == null) {
      return res.status(404).json({ message: 'Cannot find watch' });
    }

    await watch.remove();
    res.json({ message: 'Watch deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
