const express   = require('express');
const fs        = require('fs');
let router = express.Router();
let groups = require('../www/groups.json');
let Groups = require('../models/groupModel');

router.get('/', (req, res, next) => {
    // Returns a list of all the groups
    // res.status(200).json({
    //     message: "Fetching group list",
    //     groups: groups
    // });
    Groups
        .find()
        .select('-__v')
        .exec()
        .then(groups => {
            res.status(200).json({
                message: "Fetching group list",
                groups: groups
            })
        })
        .catch(err => {
            console.log(err);

            res.status(400).json({
                message: "Unable to get group list",
                error: err
            })
        })
});

router.post('/', (req, res, next) => {
    // Adds a new channel
    let parameters = req.body;

    if (parameters.name != null) {

        Groups
            .create({ "name": parameters.name })
            .then(result => {
                res.status(200).json({
                    message: "Added entry",
                    result: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: "Error adding entry",
                    error: err
                })
            })
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

    Groups
        .find({ "name": groupName })
        .then(result => {
            res.status(200).json({
                message: "found group",
                result: result
            })
        })
        .catch(err => {
            res.status(400).json({
                message: "Error adding entry",
                error: err
            })
        })
});

router.delete('/:groupName', (req, res, next) => {
    // Delete a group
    let groupName = req.params.groupName;

    console.log("deleting group " + groupName)

    Groups
        .deleteOne({ name: groupName})
        .then(result => {
            res.status(200).json({
                message: "Deleted group",
                result: result
            })
        })
        .catch(err => {
            res.status(400).json({
                message: "Error deleting group",
                error: err
            })
        })
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