const express   = require('express');
const fs        = require('fs');
let router = express.Router();
let users = require('../www/users.json');

router.get('/', (req, res, next) => {
    // Get a list of all users, and their details
    res.status(200).json({
        message: "Hey, you hit a route!",
        data: users
    });
});

router.post('/', (req, res, next) => {
    // Add a user to the users list
    let parameters = req.body;

    // If all required data is not sent in the post request, display error
    if (parameters['name']  == null || parameters['level'] == null) {
        res.status(400).json({
            message: "You did not supply all the data needed",
            your_query: parameters,
            example_query: {
                name: "example",
                level: "1"
            }
        })
    } else {
        // Otherwise, add the new user in
        user = {
            name: parameters['name'],
            level: parameters['level']
        };
        users.users[users.users.length] = user;

        users = JSON.stringify(users, null, 4);

        res.status(200).json({
            message: "New user added",
            user: user
        })

        fs.writeFile(  process.env.www_folder + '/users.json', users, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
});

router.patch('/:userId', (req, res, next) => {
    // Edit a pre-existing user
});

router.delete('/:userId', (req, res, next) => {
    // Delete a pre-existing user
});

module.exports = router;