const express   = require('express');
const fs        = require('fs');
let router = express.Router();
let groups = require('../www/groups.json');

router.get('/', (req, res, next) => {
    // Returns a list of all the channels
    res.status(200).json({
        message: "Fetching group list",
        groups: groups
    });
});

router.post('/', (req, res, next) => {
    // Adds a new channel
});

router.get('/:groupName', (req, res, next) => {
    let groupName = req.params.groupName;

    let found = false;
    for (group in groups) {
        group = groups[group];
        if (group.name == groupName) {
            found = true;
            break;
        }
    }

    if (found) {
        res.status(200).json({
            message: "Found the group!",
            group: group
        });
    } else {
        res.status(400).json({
            message: "Unable to find the group"
        });
    }
});

// router.patch('/:groupName', (req, res, next) => {
//     let groupName = req.params.groupName;

//     if () {
//         res.status().json({

//         });
//     } else {
//         res.status().json({

//         });
//     }
// });

// router.delete('/:groupName', (req, res, next) => {
//     let groupName = req.params.groupName;

//     if () {
//         res.status().json({

//         });
//     } else {
//         res.status().json({

//         });
//     }
// });

module.exports = router;