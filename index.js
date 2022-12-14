const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
//app.use(cors({origin: 'https://nomdedomaine'})); accès API
app.use('/posts', postsRoutes);

app.listen(3000, () => console.log('Server Started : 3000'));