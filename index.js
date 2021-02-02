const crypto = require('crypto');

//this algorithm provide 24 bytes
const algorithm = 'aes-192-cbc';

const text = 'laravel';

//create key
const key = crypto.scryptSync('happy', 'salt', 24);

//generate randomized initializtion vector
// or use crypto.createRandomByte();
const iv = Buffer.alloc(16, 0);

//encrypt using cipher object as streams

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrytedData = '';

cipher.on('readable', ()=>{
     let chunk;
     while(null!==(chunk=cipher.read())){
       encrytedData += chunk.toString('hex');
     }
});

cipher.on('end', ()=>{
  console.log(encrytedData);
});

cipher.write(text);
cipher.end();


// Decrypt data
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decryptedData = '';

decipher.on('readable', ()=>{
  let chunk;

  while (null !== (chunk = decipher.read())) {
    decryptedData += chunk.toString('utf8');
  }

});

decipher.on('end', ()=>{
  console.log(decryptedData);
});

decipher.write('4d0b637a10d2c8a3f58320864c1c55ec', 'hex');

decipher.end();