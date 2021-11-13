require('dotenv').config();

module.exports = {
    isLocal: process.env.ENV === 'development',
    fathomSite: process.env.FATHOM_SITE
};