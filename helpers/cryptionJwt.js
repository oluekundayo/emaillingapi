
const CryptoJS = require('crypto-js');

// var message = "SuperSecret!!";

var getKeyAndIV = function(password) {

    var keyBitLength = 256;
    var ivBitLength = 128;
    var iterations = 234;

    var bytesInSalt = 128 / 8;
    var salt = CryptoJS.lib.WordArray.random(bytesInSalt);

    var iv128Bits = CryptoJS.PBKDF2(password, salt, { keySize: 128 / 32, iterations: iterations });
    var key256Bits = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32, iterations: iterations });

    return {
        iv: iv128Bits,
        key: key256Bits
    };
};

var skey = getKeyAndIV("Password01");

const encrypt = (message) => {
  var data = CryptoJS.AES.encrypt(message, skey.key, { iv: skey.iv }); // , format: JsonFormatter
  return data.toString();
}

// var data = CryptoJS.AES.encrypt(message, skey.key, { iv: skey.iv }); // , format: JsonFormatter

const decrypt = (message) => {
  // var res1 = message.ciphertext.toString(CryptoJS.enc.Base64)
  // var res2 = message.key.toString(CryptoJS.enc.Base64);
  // var res3 = message.iv.toString(CryptoJS.enc.Base64);

  // // var ciphertext = CryptoJS.enc.Base64.parse(res1);
  // var key = CryptoJS.enc.Base64.parse(res2);
  // var iv = CryptoJS.enc.Base64.parse(res3);

  var params = {
    ciphertext: message,
    salt: ""
  };

  var clearText = CryptoJS.AES.decrypt(params, skey.key, { iv: skey.iv });
  
  return clearText.toString(CryptoJS.enc.Utf8);
}

// $(".output_text").val(data.ciphertext.toString(CryptoJS.enc.Base64));
// $(".output_key").val(data.key.toString(CryptoJS.enc.Base64));
// $(".output_iv").val(data.iv.toString(CryptoJS.enc.Base64));


// var ciphertext = CryptoJS.enc.Base64.parse($(".output_text").val());
// var key = CryptoJS.enc.Base64.parse($(".output_key").val());
// var iv = CryptoJS.enc.Base64.parse($(".output_iv").val());

// var params = {
//   ciphertext: ciphertext,
//   salt: ""
// };

// var clearText = CryptoJS.AES.decrypt(params, key, { iv: iv });

// $(".output2").val(clearText.toString(CryptoJS.enc.Utf8));



module.exports = {
  encrypt,
  decrypt
}