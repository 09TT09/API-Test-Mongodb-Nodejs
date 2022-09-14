const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (request, response) => {
    PostsModel.find((error, docs) => {
        if (!error) response.send(docs);
        else console.log("Error : " + error);
    })
})

router.post('/', (request, response) => {
    const newObject = new PostsModel({
        author: request.body.author,
        message: request.body.message
    });

    newObject.save((error, docs) => {
        if (!error) response.send(docs);
        else console.log('Error creating new data : ' + error);
    })
})

router.put('/update/:id', (request, response) => {
    if (!ObjectId.isValid(request.params.id))
        return response.status(400).send("Id unknown : " + request.params.id)

    const updateObject = {
        author: request.body.author,
        message: request.body.message
    };

    PostsModel.findByIdAndUpdate(
        request.params.id,
        { $set: updateObject },
        { new: true },
        (error, docs) => {
            if (!error) response.send(docs);
            else console.log("Update error : " + error);
        }
    )
})

router.delete('/delete/:id', (request, response) => {
    if (!ObjectId.isValid(request.params.id))
        return response.status(400).send("Id unknown : " + request.params.id)

    PostsModel.findByIdAndRemove(
        request.params.id,
        (error, docs) => {
            if (!error) response.send(docs);
            else console.lofg("Delete error : " + error);
        }
    );
})

module.exports = router