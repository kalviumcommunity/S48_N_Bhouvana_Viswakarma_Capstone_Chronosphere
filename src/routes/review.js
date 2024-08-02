const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get a review by ID and populate user and watch
router.get('/:id', (req, res) => {
  Review.findById(req.params.id)
    .populate('user')
    .populate('watch')
    .exec((err, review) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(review);
    });
});

// Add a new review
router.post('/', (req, res) => {
  const newReview = new Review(req.body);
  newReview.save((err, review) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json(review);
  });
});

module.exports = router;
