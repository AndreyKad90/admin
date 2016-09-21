//default environment is development. Provide a value from an external environment in the future
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('./server');