const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get a user by ID and populate reviews and watches
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .populate('reviews')
    .populate('watches')
    .exec((err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(user);
    });
});

module.exports = router;
