const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://admin-skydata:123321@skydata-project-cluster-gm2gy.mongodb.net/skydata-db?retryWrites=true&w=majority',
	    corsURL: 'https://skydata.azurewebsites.net/',
        authCookieName: 'x-auth-token'
    },
    production: {
        port: process.env.PORT,
        dbURL: 'mongodb+srv://admin-skydata:123321@skydata-project-cluster-gm2gy.mongodb.net/skydata-db?retryWrites=true&w=majority',
		corsURL: process.env.CORS_URL,
        authCookieName: 'x-auth-token'
    }
};

module.exports = config[env];
