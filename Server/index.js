const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();
const connection = require('./db')
connection();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(require('./routes/auth'));
app.use(cookieParser());
const port = 8000;
app.listen(port, () => {
    console.log(`Server is Running on ${port} port`);
})