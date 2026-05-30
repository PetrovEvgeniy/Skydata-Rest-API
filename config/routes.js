const router = require('../routes/');

module.exports = (app) => {

    app.get('/health', (req, res) => {
        res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    app.use('/api/user', router.user);

    app.use('/api/aircraft', router.aircraft);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. </h1>'))
};