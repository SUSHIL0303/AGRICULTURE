const express = require('express');
const router = express.Router();
const LoanApplication = require('../models/LoanApplication');

// Endpoint to handle loan form submission
router.post('/submitLoan', async (req, res) => {
  try {
    const { name, mobile, address, proof, loanAmount } = req.body;

    const newApplication = new LoanApplication({
      name,
      mobile,
      address,
      proof,
      loanAmount,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Loan application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit loan application' });
  }
});

module.exports = router;
