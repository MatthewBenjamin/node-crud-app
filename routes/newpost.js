var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/node-crud-app');

router.get('/', function(req, res) {
    res.render('newpostform', {title: 'Make a New Post'});
});

router.post('/', function(req, res) {
    var collection = db.get('posts');
    collection.insert({
        name: req.body.name,
        content: req.body.content,
        created: new Date()
    }, function(err, post) {
        if (err) {
            throw err;
        }
        res.redirect('/posts');
    });
});

module.exports = router;
