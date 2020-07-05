const express = require('express');

const teamModel = require('../data/models/teamModel.js');
// const authentication = require('../middleware/authentication.js');
const router = express.Router();

// router.use(authentication);

// Find All Teams
router.get('/', (req, res) => {
    teamModel
        .findAllTeams()
        .then(teams => {
            res.json(teams)
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find teams', err });
        });
});

// Find Team By Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    teamModel
        .findTeamById(id)
        .then(team => {
            if(team == undefined) {
                res.status(404).json({ message: 'No team with that id exists' });
            }
            else {
                res.json(team);
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find team with that id', err });
        });
});

// Find Team By Season
router.post('/season', (req, res) => {
    const team = req.body;
    teamModel
        .findTeamsBySeason(team.seasonId)
        .then(team => {
            res.json(team);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find team with inputed seasonId', err });
        });
});

// Find Team By Name
router.post('/name', (req, res) => {
    const team = req.body;
    teamModel
        .findTeamByName(team.teamName)
        .then(team => {
            console.log(team);
            res.json(team);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find team with inputed name', err });
        });
});

// Insert
router.post('/', (req, res) => {
    const team = req.body;
    teamModel
        .insert(team)
        .then(team => {
            res.json(team);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not add team', err });
        });
});

// Update

// Delete

module.exports = router;