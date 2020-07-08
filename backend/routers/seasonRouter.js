const express = require('express');

const seasonModel = require('../data/models/seasonModel.js');
const authentication = require('../middleware/authentication.js');
const router = express.Router();

router.use(authentication);

// Find All Seasons
router.get('/', (req, res) => {
    seasonModel
        .findAllSeasons()
        .then(seasons => {
            res.json(seasons)
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find seasons', err });
        });
});

// Find Season By Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    seasonModel
        .findSeasonById(id)
        .then(season => {
            if(season == undefined) {
                res.status(404).json({ message: 'No season with that id exists' });
            }
            else {
                res.json(season);
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find season with that id', err });
        });
});

// Find Season By User
router.post('/seasonsByUser', (req, res) => {
    const user = req.body;
    seasonModel
        .findSeasonsByUser(user)
        .then(seasons => {
            if(seasons.length === 0) {
                res.status(404).json({ message: 'No seasons with that adminUserId exists' });
            }
            else {
                res.json(seasons);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find season with inputed adminUserId', err });
        });
});

// Find Season By Name
router.post('/name', (req, res) => {
    const season = req.body;
    seasonModel
        .findSeasonsByName(season.name)
        .then(season => {
            if(season.length === 0) {
                res.status(404).json({ message: 'No season with that name exists' });
            }
            else {
                res.json(season);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find season with inputed name', err });
        });
});

// Insert
router.post('/', (req, res) => {
    const season = req.body;
    if(!season.name) {
        res.status(400).json({ error: 'Season does not have a name' });
    }
    else if(!season.adminUserId) {
        res.status(400).json({ error: 'Season does not have an adminUserId '});
    }
    else {
        seasonModel
            .insert(season)
            .then(season => {
                res.json(season);
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not add season', err });
            });
    }
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const season = req.body;
    seasonModel
        .update(id, season)
        .then(updatedSeason => {
            if(updatedSeason === 0) {
                res.status(404).json({ message: 'No season with that id exists' });
            }
            else {
                seasonModel
                    .findSeasonById(id)
                    .then(season => {
                        res.json(season)
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Could not update season', err });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Season cannot be modified', err });
        });
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    seasonModel
        .remove(id)
        .then(removedSeason => {
            if(removedSeason === 0) {
                res.status(404).json({ message: 'No season with that id exists' });
            }
            else {
                res.json({ message: 'Season has been deleted' });
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Season cannot be removed', err });
        });
})

module.exports = router;