const mongoose = require('mongoose');

const TractorRentalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  date: { type: Date, required: true },
  address: { type: String, required: true },
});

const TractorRental = mongoose.model('TractorRental', TractorRentalSchema);

module.exports = TractorRental;
