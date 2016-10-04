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
    })
});

router.get('/newpost', function(req, res) {
    res.render('newpostform', {title: 'Make a New Post'});
});

router.post('/newpost', function(req, res) {
    var collection = db.get('posts');
    collection.insert({
        name: req.body.name,
        content: req.body.content
    }, function(err, post) {
        if (err) {
            throw err;
        }
        res.redirect('/posts');
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
    //console.log('delete post: ', req.params.id)
    console.log('deleting post...', req.params.id)
    collection.remove({ _id: req.params.id }, function(err, post) {
        if (err) {
            throw err;
        }
        //console(post, 'deleted');
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
    })
})

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