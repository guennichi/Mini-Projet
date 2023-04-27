const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const passport = require('passport');
require('./midlware/bearer')
// connect to database
require('./database/connect');



app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




app.get('/', async (req, res) => {
  res.json({ message: 'Welcome to my REST API.' });
});

app.use('/api', require('./routes/route'))










app.listen(process.env.port|| 4000,function(){
  console.log("hello word!")
});