const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();  // Load environment variables
const app = express();
app.use(bodyParser.json());  // Middleware to parse JSON
app.use(cors());  // Enable Cross-Origin Requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send('Welcome to the Telgrid API!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
