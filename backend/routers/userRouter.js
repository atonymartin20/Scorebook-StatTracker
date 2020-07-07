const express = require('express');

const userModel = require('../data/models/userModel.js');
// const authentication = require('../middleware/authentication.js');
const router = express.Router();

// router.use(authentication);

// Find All Users
router.get('/', (req, res) => {
    userModel
        .findAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find user', err });
        });
});

// Find User By Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    userModel
        .findUserById(id)
        .then(user => {
            if(user == undefined) {
                res.status(404).json({ message: 'No user with that id exists' });
            }
            else {
                res.json(user);
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find user with that id', err });
        });
});

// Find User By Username
router.post('/username', (req, res) => {
    const user = req.body;
    if(!user.username) {
        res.status(400).json({ error: 'User does not have a username' });
    }
    userModel
        .findUserByUsername(user.username)
        .then(user => {
            if(user.length === 0) {
                res.status(404).json({ message: 'No user with that username exists' });
            }
            else {
                res.json(user);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find user with inputed username', err });
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
                res.status(404).json({ message: 'No user with that email exists' });
            }
            else {
                res.json(user);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find user with inputed email', err });
        });
});

module.exports = router;