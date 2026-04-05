const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/contactRoutes');
const connectDB = require('./Config/db');
require('dotenv').config();
const PORT = 5000;

//connect to MongoDB
connectDB();

//middlewares
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use('/api', router);

//Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//run the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
