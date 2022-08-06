const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostdata => {
            const posts = dbPostdata.map(post => post.get({ plain: true }));
            res.render('dashboard2', {
                 layout: "dashboard", posts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })
    .then(dbPostdata => {
        if (!dbPostdata) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const post = dbPostdata.get({ plain: true });
        res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.get('/new', (req, res) => {
    res.render('new-post');
});

module.exports = router;