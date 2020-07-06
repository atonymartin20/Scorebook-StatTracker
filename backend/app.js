const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const logger = require("morgan");
const passport = require('passport');

// routers and middleware
// const playerRouter = require('./routers/playerRouter.js');
const teamRouter = require('./routers/teamRouter.js');
const seasonRouter = require('./routers/seasonRouter.js');
// const userRouter = require('./routers/userRouter.js');

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require('./config/passport')
app.use(logger("tiny"));
app.use(helmet());

const PORT = process.env.PORT || '1111';

// use routers
// app.use('/api/playerRouter', playerRouter);
app.use('/api/teamRouter', teamRouter);
app.use('/api/seasonRouter', seasonRouter);
// app.use('/api/userRouter', userRouter);

app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;