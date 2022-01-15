const router = require('express').Router();

const res = require('express/lib/response');
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

router.use('/', homeRoutes);

module.exports = router;