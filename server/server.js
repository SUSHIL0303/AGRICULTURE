const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const loanApplicationRoutes = require('./routes/loanApplication');
const tractorRentalRoutes = require('./routes/tractorRental');

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/loanApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.use('/api/loan', loanApplicationRoutes);
app.use('/api/tractor', tractorRentalRoutes);

const PORT = 3001; 
app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})
