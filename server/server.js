
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');
const companyRoutes = require('./routes/companyRoutes');
const salarayRoutes=require('./routes/salaryRoutes');
const userRoutes=require('./routes/userRoute');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

app.use(jobRoutes); // Use the job routes
app.use(companyRoutes);
app.use(salarayRoutes);
app.use(userRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
