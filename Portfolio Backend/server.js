const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/contactRoutes');
require('dotenv').config();
const PORT = 5000;

//middlewares
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use('/api', router);


//run the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
