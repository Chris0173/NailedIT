const crypto = require('crypto');

const generateRandomSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
}

console.log('Generated secret key:', generateRandomSecretKey());
