const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "posts",
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
);

module.exports = { PostsModel };