const express = require('express');
require('dotenv').config();
const app = express();
const dbConfig = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const hotelRouter = require('./routes/hotelRoute');

// Serve static files from the 'build' directory
app.use(express.static('build'));

// Parse JSON bodies
app.use(express.json());

// Route handlers
app.use('/api/users', userRouter.router);
app.use('/api/hotel', hotelRouter.router);

// Start the server
app.listen(9000, () => {
    console.log('Server is started');
});
