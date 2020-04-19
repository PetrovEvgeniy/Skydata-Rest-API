const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: process.env.MONGODB_URI,
		corsURL: 'https://localhost:3000'
        authCookieName: 'x-auth-token'
    },
    production: {
        port: process.env.PORT,
        dbURL: process.env.MONGODB_URI,
		corsURL: process.env.CORS_URL
        authCookieName: 'x-auth-token'
    }
};

module.exports = config[env];