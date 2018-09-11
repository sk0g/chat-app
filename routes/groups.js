module.exports = function(app, fs) {
    app.get('/api/groups/get_groups', (req, res) => {

        fs.readfile('../www/groups.json', 'utf8', function(err, data) {
            // Error should not happen, skip

        })
    });
}