const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: process.env.MONGODB_URI,
        authCookieName: 'x-auth-token'
    },
    production: {
        port: process.env.PORT,
        dbURL: process.env.MONGODB_URI,
        authCookieName: 'x-auth-token'
    }
};

module.exports = config[env];