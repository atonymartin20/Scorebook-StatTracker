const db = require('../dbConfig.js');

module.exports = {
    findDriverById: (id) => {
        return db('racing-drivers').where('id', id).first();
    },

    findDriverByName: (driver) => {
        return db('racing-drivers').where('firstName', driver.firstName).where('lastName', driver.lastName).orderBy('id');
    },

    findAllDrivers: () => {
        return db('racing-drivers').select( 'id', 'firstName', 'lastName');
    },

    insert: (driver) => {
        return db('racing-drivers').insert(driver, 'id');
    },

    update: (id, changes) => {
        return db('racing-drivers').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('racing-drivers').where('id', id).del();
    },
};