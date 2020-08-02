const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const authHelper = require('../helpers/authHelper.js');
const userModel = require('../data/models/userModel.js');

const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL;

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: FRONTEND_URL + '/login' }),
  function(req, res) {
    const token = authHelper.generateToken(req.user);
    // Successful authentication, redirect home.
    res.redirect(FRONTEND_URL + '/authorize?token=' + token);
});

router.post('/login', (req, res) => {
    const creds = req.body;
    userModel
        .findUserByEmail(creds.email)
        .then((user) => {
            if (user && bcrypt.compareSync(creds.password, user.password)) {
                delete user['password'];
                const token = authHelper.generateToken(user);
                res.json({ token });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: 'Server error' });
        });
});

router.post('/register', (req, res) => {
    const creds = req.body;
    creds.password = bcrypt.hashSync(creds.password, 4);
    userModel
        .insert(creds)
        .then((user) => {
            if (user.length) {
                const token = authHelper.generateToken(user);
                res.json({ token });
            } else {
                res.status(400).json({ error: 'Unable to register user' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: 'Server error' });
        });
});

// Find User By Email
router.post('/email', (req, res) => {
    const user = req.body;
    if(!user.email) {
        res.status(400).json({ error: 'User does not have an email' });
    }
    userModel
        .findUserByEmail(user.email)
        .then(user => {
            if(user.length === 0) {
                res.json(user);
            }
            else {
                res.status(409).json({ error: 'Email address has already been used.' });
            }
        })
        .catch(err => {
            // res.status(500).json({ error: 'Could not find user with inputed email', err });
            res.status(200).json({ message: 'Email address has not been used.'});
        });
});

// Find User By Username
router.post('/username', (req, res) => {
    const user = req.body;
    if(!user.username) {
        res.status(400).json({ error: 'No inputed username' });
    }
    userModel
        .findUserByUsername(user.username)
        .then(user => {
            if(user.length === 0) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: 'User with that username exists' });
            }
        })
        .catch(err => {
            // res.status(500).json({ error: 'Could not find user with inputed username', err });
            res.status(200).json({ message: 'Username has not been used.'});
        });
});

module.exports = router;