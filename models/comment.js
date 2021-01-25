const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);