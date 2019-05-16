let server = 'https://safe-stream-17355.herokuapp.com';

const env = process.env.NODE_ENV;

if (env === 'development') {
    server = 'http://localhost:3001';
}

module.exports = server;
