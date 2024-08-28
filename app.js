require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.static('public'));

//Template Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});