var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/node-crud-app');

router.get('/', function(req, res) {
    var collection = db.get('posts');
    collection.find({}, function(err, posts) {
        if (err) {
            throw err;
        }
        res.render('posts', {
            'posts': posts
        });
    });
});

router.get('/:id/delete', function(req, res) {
    var collection = db.get('posts');
    collection.findOne({_id: req.params.id}, function(err, post) {
        if (err) {
            throw err;
        }
        res.render('deletepost', { post: post });
    });
});

router.post('/:id/delete', function(req, res) {
    var collection =db.get('posts');
    collection.remove({ _id: req.params.id }, function(err, post) {
        if (err) {
            throw err;
        }
        res.redirect('/posts');
    });
});

router.get('/:id/edit', function(req, res) {
    var collection = db.get('posts');
    collection.findOne( { _id: req.params.id }, function(err, post ) {
        if (err) {
            throw err;
        }
        res.render('editpostform', { post: post });
    });
});

router.post('/:id/edit', function(req, res) {
    var collection = db.get('posts');
    collection.update(
        { _id: req.params.id },
        {
            name: req.body.name,
            content: req.body.content
        }, function(err, post) {
            if (err) {
                throw err;
            }
            res.redirect('/posts');
        });
});

module.exports = router;
