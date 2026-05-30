const router = require('../routes/');
const mongoose = require('mongoose');

module.exports = (app) => {

    app.get('/health', async (req, res) => {
        try {
            // Ping MongoDB to keep connection alive
            await mongoose.connection.db.admin().ping();
            res.status(200).json({
                status: 'ok',
                timestamp: new Date().toISOString(),
                database: 'connected'
            });
        } catch (error) {
            res.status(503).json({
                status: 'error',
                timestamp: new Date().toISOString(),
                database: 'disconnected',
                error: error.message
            });
        }
    });

    app.use('/api/user', router.user);

    app.use('/api/aircraft', router.aircraft);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. </h1>'))
};