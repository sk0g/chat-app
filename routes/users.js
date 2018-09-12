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
    if (parameters['name']  == null
        || parameters['level'] == null
        || parameters['email'] == null) {
        res.status(400).json({
            message: "You did not supply all the data needed",
            your_query: parameters,
            example_query: {
                name: "example",
                level: "1",
                email: "address@domain.com"
            }
        })
    } else {
        // Otherwise, add the new user in
        user = {
            name: parameters['name'],
            level: parameters['level'],
            email: parameters['email']
        };
        users.users[users.users.length] = mk_string(user);

        res.status(200).json({
            message: "New user added",
            user: user
        })

        fs.writeFile(  process.env.www_folder + '/users.json', mk_string(users), function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
});

router.patch('/:userName', (req, res, next) => {
    // Edit a pre-existing user
    let userName = req.params.userName;
    let prm = req.body;
    let found = false;

    // Attempt finding the user and change a variable if found
    for (var user in users.users) {
        user = users.users[user];
        if (user.name === userName) {
            found = true;
            break;
        }
    }

    // Return an error message if not found,
    // or edit the user and send a success message
    if (found) {

        if (prm.name != null) { user.name = prm.name; }
        if (prm.email != null) { user.email = prm.email; }
        if (prm.level != null) { user.level = prm.level; }

        console.log(user);

        users.users[userName] = user;

        fs.writeFile(  process.env.www_folder + '/users.json', mk_string(users), function(err) {
            if (err) {
                console.log(err);
            }
        });

        res.status(200).json({
            message: "User being edited",
            user: user
        });
    } else {
        res.status(400).json({
            message: "Specified user not found"
        });
    }
});

function mk_string(obj) {
    // Returns a properly JSON stringified form of the object
    return JSON.stringify(obj, null, 4);
}

router.delete('/:userName', (req, res, next) => {
    // Delete a pre-existing user
});

module.exports = router;