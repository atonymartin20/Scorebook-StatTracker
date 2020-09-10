const express = require('express');

const racingDriverModel = require('../data/models/racingDriverModel.js');
const authentication = require('../middleware/authentication.js');
const router = express.Router();

router.use(authentication);

// Find All Drivers
router.get('/', (req, res) => {
    racingDriverModel
        .findAllDrivers()
        .then(drivers => {
            res.json(drivers)
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find drivers', err });
        });
});

// Find Driver By Id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    racingDriverModel
        .findDriverById(id)
        .then(driver => {
            if(driver == undefined) {
                res.status(404).json({ error: 'No driver with that id exists' });
            }
            else {
                res.json(driver);
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find driver with that id', err });
        });
});

// Find Driver By Name
router.post('/name', (req, res) => {
    const driver = req.body;
    if(!driver.firstName) {
        res.status(400).json({ error: 'Driver does not have a firstName' });
    }
    if(!driver.lastName) {
        res.status(400).json({ error: 'Driver does not have a lastName' });
    }
    racingDriverModel
        .findDriverByName(driver)
        .then(driver => {
            if(driver.length === 0) {
                res.status(404).json({ error: 'No driver with that name exists' });
            }
            else {
                res.json(driver);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find driver with inputed name', err });
        });
});

// Insert
router.post('/', (req, res) => {
    const driver = req.body;
    if(!driver.firstName) {
        res.status(400).json({ error: 'Driver does not have a firstName' });
    }
    if(!driver.lastName) {
        res.status(400).json({ error: 'Driver does not have a lastName' });
    }
    else {
        racingDriverModel
            .insert(driver)
            .then(driver => {
                res.json(driver);
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not add driver', err });
            });
    }
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const driver = req.body;
    racingDriverModel
        .update(id, driver)
        .then(updatedDriver => {
            if(updatedDriver === 0) {
                res.status(404).json({ error: 'No driver with that id exists' });
            }
            else {
                racingDriverModel
                    .findDriverById(id)
                    .then(driver => {
                        res.json(driver)
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Could not update driver', err });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Driver cannot be modified', err });
        });
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    racingDriverModel
        .remove(id)
        .then(removedDriver => {
            if(removedDriver === 0) {
                res.status(404).json({ error: 'No driver with that id exists' });
            }
            else {
                res.json({ error: 'Driver has been deleted' });
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'Driver cannot be removed', err });
        });
})

module.exports = router;