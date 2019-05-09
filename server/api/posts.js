const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Import models
const Post = require('../models/Post');


router.get('/',(req,res) => {
    Post.find()
    .exec()
    .then(result => {
        if(result.length>=0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(400).json({
                message : 'No entries found'
            });
        }
        
    })
    .catch(err => {
        res.status(500).json({
            error : err.message
        });
    });
});

router.get('/:id',(req,res) => {
    var id = req.params.id;
    Post.findById(id)
    .exec()
    .then(result => {
        if(result.length>=0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(400).json({
                message : 'No entries found'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error : err.message
        });
    });
});

router.post('/',(req,res) => {
    var post = new Post({
        _id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        content : req.body.content,
        createdBy : req.body.createdBy
    });

    post.save()
    .then()
    .catch(err => {
        res.status(500).json({
            error : err.message
        });
    });
});

router.delete('/:id', (req,res) => {
    var id = req.params.id;
    Post.remove({_id : id})
    .exec()
    .then()
    .catch(err => {
        res.status(500).json({
            error : err.message
        });
    });
});


module.exports = router;