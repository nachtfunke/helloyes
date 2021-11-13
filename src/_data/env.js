require('dotenv').config();

module.exports = {
    isLocal: process.env.ENV === 'development'
};