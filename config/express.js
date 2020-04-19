const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const cors = require('cors');
const secret = 'ultrasecretsecret';

module.exports = (app) => {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.use(cookieParser(secret));
};