const express   = require('express');
const fs        = require('fs');
let router = express.Router();
let groups = require('../www/groups.json');

router.get('/', (req, res, next) => {
    // Returns a list of all the groups
    res.status(200).json({
        message: "Fetching group list",
        groups: groups
    });
});

router.post('/', (req, res, next) => {
    // Adds a new channel
    let parameters = req.body;

    if (parameters.name != null) {
        channels = [];
        if (parameters.channels != null) {
            channels = parameters.channels;
        }

        groups.push({ name: parameters.name, channels: channels });
        console.log(groups);

        write_to_file(groups);

        res.status(200).json({
            message: "Group added!"
        });
    } else {
        res.status(400).json({
            message: "Insufficient data to create a group",
            parameters: parameters
        })
    }
});

router.get('/:groupName', (req, res, next) => {
    // Get a group, using the groupName specified
    let groupName = req.params.groupName;
    let found = false;

    for (var group in groups) {
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

router.delete('/:groupName', (req, res, next) => {
    // Delete a group
    let groupName = req.params.groupName;
    let found = false;

    for (var group_index in groups) {
        if (groups[group_index]['name'] == groupName) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(groups.splice(group_index, 1));

        write_to_file(groups);

        res.status(200).json({
            message: "Group deleted!"
        });
    } else {
        res.status(400).json({
            message: "Failed to find group"
        });
    }
});

function write_to_file(g) {
    fs.writeFile(  process.env.www_folder + '/groups.json', mk_string(g), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function mk_string(obj) {
    // Returns a properly JSON stringified form of the object
    return JSON.stringify(obj, null, 4);
}

module.exports = router;