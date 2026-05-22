require('dotenv').config();
const express = require('express');
const mogoose = require('mongoose');
const brcypt = require('cors');
const jwt =  require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());