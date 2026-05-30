const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    console.log('=== MongoDB Connection Debug ===');
    console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGODB_URI length:', process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0);
    console.log('Config dbURL exists:', !!config.dbURL);

    const dbURL = config.dbURL ? config.dbURL.trim() : '';

    // Mask the password in the URL for logging
    const maskedURL = dbURL.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@');
    console.log('Connection string (masked):', maskedURL);
    console.log('Connection string length:', dbURL.length);
    console.log('================================');

    if (!dbURL) {
        throw new Error('MongoDB connection string is missing. Please set MONGODB_URI environment variable.');
    }

    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('✅ MongoDB connected successfully');
        })
        .catch(err => {
            console.error('❌ MongoDB connection failed:', err.message);
            throw err;
        });
};