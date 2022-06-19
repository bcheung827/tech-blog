const router = require('express').Router();
const apiRoutes = require('./apis');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
router.use('/apis', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;