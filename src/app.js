const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
require('dotenv').config();
const connectDB = require('./config/db');
const intakeRoutes = require('./routes/intakeRoutes');

const app = express();
app.use(cors({
  origin: 'https://gpt-ai-gilt.vercel.app/form',
  methods: ['Get','Post'],
  credentials: true,
}));
app.use(express.json());

app.use('/api/intake', intakeRoutes);
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
