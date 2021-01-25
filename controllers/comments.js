const Comment = require('../models/comment');

module.exports = {
    create,
    addComment
}

function create(req, res) {
    
    Comment.create(req.body)
}

function addComment(req, res) {
    
}