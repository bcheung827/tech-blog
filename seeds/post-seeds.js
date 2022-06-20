const { Post } = require('../models');

const postData = [
    {
        title: "Now might be a good time to think about crypto insurance",
        post_content: "The crypto industry is cratering. Bitcoin prices are at their lowest since 2020; one platform has barred users from withdrawing funds, and many of the biggest crypto companies, including Coinbase and BlockFi, have announced layoffs.",
        user_id: 1
    },
    {
        title: "Meta is getting data about you from some surprising places",
        post_content: "Meta makes Pixel available, free of charge, to businesses to embed in their sites.",
        user_id: 2
    },
    {
        title: "Leaked transcript: Inside Elon Musk’s first meeting with Twitter employees",
        post_content: "On Thursday morning, Elon Musk addressed Twitter employees for the first time in a Q&A session about how he’ll run the social media company. ",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;