const crypto = require('crypto');

const text = 'John doe';

const algorithm = 'aes-192-cbc';

const secretKey = crypto.scryptSync('Happy', 'salt', 24);

const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

let encrypted = cipher.update(text, 'utf8', 'hex');

encrypted += cipher.final('hex');

console.log("The encrypted text is", encrypted);

console.log('<<Copy encrypted text to decrypt it>>');

//Using Decipher to decrypt text

const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

let decrypted = decipher.update(encrypted, 'hex', 'utf8');

decrypted += decipher.final('utf8');

console.log('Decrypted text is', decrypted);

