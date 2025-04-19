import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to DB
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/admin',adminRouter)

// API endpoint
app.get('/', (req, res) => {
  res.send('API WORKING!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
