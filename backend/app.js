const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const logger = require("morgan");
const passport = require('passport');

// routers and middleware
const authenticationRouter = require('./routers/authenticationRouter');
const teamRouter = require('./routers/teamRouter.js');
const seasonRouter = require('./routers/seasonRouter.js');
const userRouter = require('./routers/userRouter.js');
const baseballPlayerRouter = require('./routers/baseballPlayerRouter.js');
const basketballPlayerRouter = require('./routers/basketballPlayerRouter.js');
const footballPlayerRouter = require('./routers/footballPlayerRouter.js');
const golfPlayerRouter = require('./routers/golfPlayerRouter.js');
const hockeyPlayerRouter = require('./routers/hockeyPlayerRouter.js');
const racingDriverRouter = require('./routers/racingDriverRouter.js');
const soccerPlayerRouter = require('./routers/soccerPlayerRouter.js');

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require('./config/passport')
app.use(logger("tiny"));
app.use(helmet());

const PORT = process.env.PORT || '1111';

// use routers
app.use('/api/authenticationRouter', authenticationRouter);
app.use('/api/teamRouter', teamRouter);
app.use('/api/seasonRouter', seasonRouter);
app.use('/api/userRouter', userRouter);
app.use('/api/baseballPlayerRouter', baseballPlayerRouter);
app.use('/api/basketballPlayerRouter', basketballPlayerRouter);
app.use('/api/footballPlayerRouter', footballPlayerRouter);
app.use('/api/golfPlayerRouter', golfPlayerRouter);
app.use('/api/hockeyPlayerRouter', hockeyPlayerRouter);
app.use('/api/racingDriverRouter', racingDriverRouter);
app.use('/api/soccerPlayerRouter', soccerPlayerRouter);

app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;