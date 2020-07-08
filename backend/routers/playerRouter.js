const express = require('express');

const playerModel = require('../data/models/playerModel.js');
const authentication = require('../middleware/authentication.js');
const router = express.Router();

router.use(authentication);

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

// Insert
router.post('/', (req, res) => {
    const player = req.body;
    if(!player.firstName) {
        res.status(400).json({ error: 'Player does not have a firstName' });
    }
    if(!player.lastName) {
        res.status(400).json({ error: 'Player does not have a lastName' });
    }
    else {
        playerModel
            .insert(player)
            .then(player => {
                res.json(player);
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not add player', err });
            });
    }
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const player = req.body;
    playerModel
        .update(id, player)
        .then(updatedPlayer => {
            if(updatedPlayer === 0) {
                res.status(404).json({ message: 'No player with that id exists' });
            }
            else {
                playerModel
                    .findPlayerById(id)
                    .then(player => {
                        res.json(player)
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Could not update player', err });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Player cannot be modified', err });
        });
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    playerModel
        .remove(id)
        .then(removedPlayer => {
            if(removedPlayer === 0) {
                res.status(404).json({ message: 'No player with that id exists' });
            }
            else {
                res.json({ message: 'Player has been deleted' });
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Player cannot be removed', err });
        });
})

module.exports = router;