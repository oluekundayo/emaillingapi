// helper.js
// Import dependency modules
const bcrypt = require("bcrypt");
// const CryptoJS = require('crypto-js');
// Password encryption Function
const encryptPWD =(password)=>{
// Hash password and salt with md5 encryption
return bcrypt.hashSync(password, bcrypt.genSaltSync(10),null);
};
// Password comparison Functon
const comparePWD = (password1, password2) => {
// Compare two passwords
return bcrypt.compareSync(password1, password2);
};



// testing CryptoJS

// let sent = "Jesus";

// let encrypted = CryptoJS.AES.encrypt(sent, "Secret Passphrase");
// let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

// console.log(encrypted.toString());
// console.log(decrypted.toString(CryptoJS.enc.Utf8));

// const cryptjwt = (token, salt, value) =>{
//     if (value === "encrypt") {
//         return CryptoJS.Rabbit.encrypt(token, salt).toString()
//     } else {
//         return CryptoJS.Rabbit.decrypt(token, salt).toString(CryptoJS.enc.Utf8);
//     }

    
// };

// const decryptjwt = (encryptedtoken, salt) =>{
//     return CryptoJS.AES.decrypt(encryptedtoken, salt).toString(CryptoJS.enc.Utf8);
// };
// Export module
module.exports={
    encryptPWD, 
    comparePWD,
    // cryptjwt,
    // decryptjwt
};

// How to use the password

// //Import helper function
// const {encryptPWD,comparePWD} = require(‘./helper’);
// // Encryption example
// const encryptedPWD = encryptPWD(“Vakindu Philliam”)
// console.log(encryptedPWD);
// // Decryption example if Passwords match
// const matcher_True = comparePWD(“Vakindu Philliam”, encryptedPWD)
// console.log(matcher_True); // True
// // Decryption example if Passwords do not match
// const matcher_False = comparePWD(“Pyramid IO”, encryptedPWD)
// console.log(matcher_False); // False