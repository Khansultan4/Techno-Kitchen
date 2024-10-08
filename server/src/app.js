require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const cors = require('cors');
const removeHeaders = require('../middlewares/removeHeaders');

const corsConfig = {
  origin: ['http://localhost:5173', 'http://127.0.0.1.5173'],
  credentials: true,
};

const apiRouter = require('./routers/routers.api');

app.use('/uploads', express.static(path.join(__dirname, '../', 'uploads')));

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(removeHeaders);

app.use('/api', apiRouter);

module.exports = app;
