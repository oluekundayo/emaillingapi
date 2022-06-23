const usersSQLSchema = require("../database-schema");
const {encryptPWD,comparePWD} = require('../helpers/password');
const UserService = require("../services/dataGetterService");
const InsertService = require("../services/dataInsertService");
const loginService = require("../services/loginService");
const jwt = require('jsonwebtoken');
const config = require('../config');
const EmailService = require("../services/emailService");
const UpdateService = require("../services/dataUpdateService");
const _ = require('lodash');
const DeleteService = require("../services/dataDeleteService");

const createUser = async (req, res, next) => {
  const {
    fullname,
    email,
    password,
    role
  } = req.body;
  
  const getUser = new UserService();
  const insertService = new InsertService();

  const verifier = require("email-verify");
  const { isDevelopment } = require("../config");
  const { badJson, goodJson, nameValid } = require("../helpers");

  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);

  let roleNo;

  if (!email) return badJsonWithRes("Email is required");
  if (email.length > 250)
    return badJsonWithRes("Email should not be more than 250 characters long");
  // verifier.verify(email, function (err, resp) {
    // if (err) return badJsonWithRes("Unable to verify if your email is working");
    // if (!resp.success) return badJsonWithRes("Email is not accessible");

    let nameErr;
    if ((nameErr = nameValid(fullname, "Full Name")) !== true)
      return badJsonWithRes(nameErr);
    // if ((nameErr = nameValid(othername, "Other Name", true)) !== true)
    //   return badJsonWithRes(nameErr);
    // if ((nameErr = nameValid(lastname, "Last Name")) !== true)
    //   return badJsonWithRes(nameErr);
    //   if ((nameErr = nameValid(user_type, "Users Type")) !== true)
    //   return badJsonWithRes(nameErr);
    if (!password) return badJsonWithRes("Password is required");
    else if (password.length < 4)
      return badJsonWithRes("Password must be at least 4 characters long");
    else if ([fullname, email].includes(password))
      return badJsonWithRes(
        "Password must not be any of your fullname or email"
      );
    // if (sex && sex !== "male" && sex !== "female")
    //   return badJsonWithRes("Sex must be one of male or female");
    // if (
    //   phone_no &&
    //   !/^(\+234|0)\s?-?\s?\d{3}\s?-?\s?\d{3}\s?-?\s?\d{4}$/.test(phone_no)
    // )
    //   return badJsonWithRes("Phone number is invalid");

    // if (role == '4712') {
    //   roleNo = 3
    // }
    // if (role == '4975') {
    //   roleNo = 2
    // }
    // if (role == '2383') {
    //   roleNo = 1
    // }

    // if (role != '4712' || role != '4975' || role != '2383' ) {
    //   return badJsonWithRes(
    //     "Role is incorrect. Please Contact your Admin for a vaild Role Code"
    //   );
    // }

    let userData = await getUser.findTableData('user_tbl', 'email', email);

    if (userData.length > 0) {
        return badJsonWithRes(
            "This email address has already been registered", 
            400
        );
    } else {
        const bcrypt = require("bcrypt");        
        let getUserId = `Admin ` + Math.floor(Math.pow(10, 4-1) + Math.random() * 9 * Math.pow(10, 4-1)); 
          const insertObj = {
            admin: getUserId,
            fullname,
            email,
            role,
            password: encryptPWD(req.body.password),
          };
          let insertUserData = await insertService.InsertTable('user_tbl', insertObj);
          if (insertUserData)
          goodJsonWithRes({ 
            message: "User created!!", 
            userid: getUserId 
          }, 201);
        else badJsonWithRes("Unable to create user's account");
    }
};

const getUserDetails = async (req, res, next) => {
  const { badJson, goodJson, nameValid } = require("../helpers");
  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);
  const getUser = new UserService();
  //   const loginservice = new loginService();
  const {
      user_id
  } = req.query;

  let userData = await getUser.findTableData('user_tbl', 'id', user_id);
  if (userData.length < 1) {
    badJsonWithRes(`Sorry, No Data Found.`)
    return;
  }

  userData = _.omit(userData[0], ['password']);
  // console.log(newUserData)

  goodJsonWithRes(userData, 201);
}

const updateUserData = async (req, res, next) => {
  
  const { badJson, goodJson } = require("../helpers");

  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);

    const {
        id,
        current_password,
        password
      } = req.body;
      
      const getUser = new UserService();
      const emailsender = new EmailService();
      const updateUser = new UpdateService();

      let checkEmail = await getUser.findTableData('user_tbl', 'id', id);
      if (checkEmail) {
        let checkingPass = await comparePWD(current_password, checkEmail[0].password);
          
          if (checkingPass) {
            let payload = {
              password: encryptPWD(password),
            };
            // if (sendEmail) {
              let sendUpdate = await updateUser.updateTable('user_tbl', payload, 'id', id);
              if (sendUpdate)            
                  goodJsonWithRes({message:` password rest Successfully.`}, 201);
            // } else {
            //   badJsonWithRes('Please check your mail and try again.')
            // } 
          }         
      }

}



const sendForgotMail = async (req, res, next) => {
  
  const { badJson, goodJson } = require("../helpers");

  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);

    const {
        email
      } = req.query;
      
      const getUser = new UserService();
      const emailsender = new EmailService();
      const updateUser = new UpdateService();

      let checkEmail = await getUser.findTableData('user_tbl', 'email', email);
      if (checkEmail) {
          let code = Math.floor(Math.pow(10, 4-1) + Math.random() * 9 * Math.pow(10, 4-1)).toString();

          let sendEmail = await emailsender.sendForgotMail(email, code)

          let payload = {
            password: encryptPWD(code),
          };
          // if (sendEmail) {
            let sendUpdate = await updateUser.updateTable('user_tbl', payload, 'email', email);;
            if (sendUpdate)            
                goodJsonWithRes({message:`A mail of rest password as been sent to ${email}.`}, 201);
          // } else {
          //   badJsonWithRes('Please check your mail and try again.')
          // }          
      }

}

const deleteUserDetails = async (req, res, next) => {
  const { badJson, goodJson, nameValid } = require("../helpers");
  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);
  const deleteService = new DeleteService();
  //   const loginservice = new loginService();
  const {
      user_id
  } = req.query;

  let userData = await deleteService.deleteTable('user_tbl', 'id', user_id);
  if (userData.length < 1) {
    badJsonWithRes(`Sorry, No Data Found.`)
    return;
  }

  // userData = _.omit(userData[0], ['password']);
  // console.log(newUserData)

  goodJsonWithRes('Deleted', 201);
}

module.exports = {
    createUser: createUser,
    getUserDetails: getUserDetails,
    updateUserData: updateUserData,
    sendForgotMail: sendForgotMail,
    deleteUserDetails: deleteUserDetails
};