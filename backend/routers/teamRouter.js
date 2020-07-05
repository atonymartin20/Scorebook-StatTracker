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
        .then(teams => {
            if(teams.length === 0) {
                res.status(404).json({ message: 'No team with that seasonId exists' });
            }
            else {
                res.json(teams);
            }
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
            if(team.length === 0) {
                res.status(404).json({ message: 'No team with that name exists' });
            }
            else {
                res.json(team);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find team with inputed name', err });
        });
});

// Insert
router.post('/', (req, res) => {
    const team = req.body;
    if(!team.teamName) {
        res.status(400).json({ error: 'Team does not have a teamName' });
    }
    else if(!team.seasonId) {
        res.status(400).json({ error: 'Team does not have a seasonId '});
    }
    else {
        teamModel
            .insert(team)
            .then(team => {
                res.json(team);
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not add team', err });
            });
    }
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const team = req.body;
    teamModel
        .update(id, team)
        .then(updatedTeam => {
            if(updatedTeam === 0) {
                res.status(404).json({ message: 'No team with that id exists' });
            }
            else {
                teamModel
                    .findTeamById(id)
                    .then(team => {
                        res.json(team)
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Could not update team', err });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Team cannot be modified', err });
        });
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    teamModel
        .remove(id)
        .then(removedTeam => {
            if(removedTeam === 0) {
                res.status(404).json({ message: 'No team with that id exists' });
            }
            else {
                res.json({ message: 'Team has been deleted' });
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Team cannot be removed', err });
        });
})

module.exports = router;