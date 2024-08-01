const mongoose = require('mongoose');

const LoanApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  proof: { type: String, required: true }, // Store the file path or URL
  loanAmount: { type: String, required: true },
});

const LoanApplication = mongoose.model('LoanApplication', LoanApplicationSchema);

module.exports = LoanApplication;
