var express = require('express');
var router = express.Router();
var User = require('../../models/userModel');
var _ = require('lodash');

//GET user
router.get('/', (req, res, next) => {
    User.find().exec((err, data) => {
        if (err) {
            return res.status(500).send({error : {message: err.message, code: err.code}});
        }
        res.status(200).send(data);
    })
})

//GET user by id
router.get('/:_id', (req, res, next) => {
    User.findById(req.params._id).exec((err, data) => {
        if (err) {
            return res.status(500).send({error : {message: err.message, code: err.code}});
        }
        res.status(200).send(data);
    })
})

//CREATE
router.post('/', (req, res, next) => {
    var doc = new User(req.body);
    doc.save((err, data) => {
        if(err) {
            return res.status(500).send({error : {message: err.message, code: err.code}});
        }
        res.status(200).send({Success: {message: "Create Success."}});
    })
})

//DELETE
router.delete('/:_id', (req, res, next) => {
    User.findByIdAndDelete(req.params._id, (err, data) => {
        if(err) {
            return res.status(500).send({error : {message: err.message, code: err.code}});
        }
        res.status(200).send({Success: {message: "Delete Success."}});
    })
})

//UPDATE
router.put('/:_id', (req, res, next) => {
    User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if(err) {
            return res.status(500).send({error : {message: err.message, code: err.code}});
        }
        res.status(200).send({Success: {message: "Update Success."}});
    })
})

module.exports = router;