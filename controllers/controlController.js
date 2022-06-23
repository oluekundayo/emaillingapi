const GetterService = require("../services/dataGetterService");
const InsertService = require("../services/dataInsertService");
const UpdateService = require("../services/dataUpdateService");
const DeleteService = require("../services/dataDeleteService");


const EmailService = require("../services/emailService");

const createControl = async (req, res, next) => {
  const { badJson, goodJson } = require("../helpers");

  const insertService = new InsertService();
  const getterService = new GetterService();
  const emailService = new EmailService();

  const badJsonWithRes = (err, code) => badJson(res, err, code);
  const goodJsonWithRes = (data, code) => goodJson(res, data, code);
  const {
    subject,
    description
  } = req.body;
  const insertObj = {
    subject,
    description
  };

      let insertUserData = await emailService.sendMail(
        "ekundayoolumide1@gmail.com",
        insertObj
      );
      if (insertUserData) goodJsonWithRes({ message: `User created!!` }, 201);
      else badJsonWithRes("Unable to create the User account");
    // }
  
};

module.exports = {
  createControl: createControl,
};
