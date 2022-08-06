const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great Work!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Nice job!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "This is amazing progress!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;