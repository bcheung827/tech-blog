const { User } =require('../models');

const userData = [{
        username: 'Brandon',
        password: 'bcheung'
    },
    {
        username: 'Teresa',
        password: 'tvu'
    },
    {
        username: 'Andy',
        password: 'ali'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;