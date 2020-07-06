const express = require('express');

const playerModel = require('../data/models/playerModel.js');
// const authentication = require('../middleware/authentication.js');
const router = express.Router();

// router.use(authentication);

// Find All Players
router.get('/', (req, res) => {
    playerModel
        .findAllPlayers()
        .then(players => {
            res.json(players)
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find players', err });
        });
});

// Find Player By Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    playerModel
        .findPlayerById(id)
        .then(player => {
            if(player == undefined) {
                res.status(404).json({ message: 'No player with that id exists' });
            }
            else {
                res.json(player);
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find player with that id', err });
        });
});

// Find Player By Name
router.post('/name', (req, res) => {
    const player = req.body;
    if(!player.firstName) {
        res.status(400).json({ error: 'Player does not have a firstName' });
    }
    if(!player.lastName) {
        res.status(400).json({ error: 'Player does not have a lastName' });
    }
    playerModel
        .findPlayerByName(player)
        .then(player => {
            if(player.length === 0) {
                res.status(404).json({ message: 'No player with that name exists' });
            }
            else {
                res.json(player);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find player with inputed name', err });
        });
});

module.exports = router;