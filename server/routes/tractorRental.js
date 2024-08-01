const express = require('express');
const router = express.Router();
const TractorRental = require('../models/TractorRental');

// Endpoint to handle tractor rental form submission
router.post('/submitTractor', async (req, res) => {
  try {
    const { name, mobile, date, address } = req.body;

    const newRental = new TractorRental({
      name,
      mobile,
      date,
      address,
    });

    await newRental.save();
    res.status(201).json({ message: 'Tractor rental submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit tractor rental' });
  }
});

module.exports = router;
