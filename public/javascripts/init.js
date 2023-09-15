const crypto = require('crypto');

crypto.setEngine('node', () => { });

module.exports = crypto;