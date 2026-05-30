const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    const dbURL = config.dbURL ? config.dbURL.trim() : '';

    if (!dbURL) {
        throw new Error('MongoDB connection string is missing. Please set MONGODB_URI environment variable.');
    }

    return mongoose.connect(dbURL)
        .then(() => {
            console.log('✅ MongoDB connected successfully');
        })
        .catch(err => {
            console.error('❌ MongoDB connection failed:', err.message);
            throw err;
        });
};