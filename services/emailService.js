const nodemailer = require("nodemailer");

class EmailService {
  sendRegisterMail(email) {
    return new Promise((resolve, reject) => {
      try {
        const transporter = nodemailer.createTransport({
          host: "mail.urentam.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            // type: 'custom',
            // method: 'CRAM-MD5',
            // method: 'NTLM',
            user: "support@urentam.com", // generated ethereal user
            pass: "6.KOxn66GY#f7f", // generated ethereal password
          },
          customAuth: {
            // 'CRAM-MD5': nodemailerCramMd5,
            // NTLM: nodemailerNTLMAuth
          },
          connectionTimeout: 5 * 60 * 1000, // 5 min
          tls: {
            rejectUnauthorized: false,
          },
        });

        var mailOptions = {
          from: "Urentam <noreply@urentam.com>",
          to: email,
          subject: "Test",
          html: `${message}`,
        };

        transporter.sendMail(mailOptions, function (error, res) {
          if (error) {
            // console.log(error);
            // badJsonWithRes("Unable to unable to send mail" + error)
            reject("Unable to unable to send mail" + error);
          } else {
            // console.log('Email sent: ' + res.response);
            resolve("Email sent: " + res.response, 201);
          }
        });

        let message = `
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:v="urn:schemas-microsoft-com:vml">

            <head>
              <!--[if gte mso 9
                        ]><xml
                            ><o:OfficeDocumentSettings
                            ><o:AllowPNG /><o:PixelsPerInch
                                >96</o:PixelsPerInch
                            ></o:OfficeDocumentSettings
                            ></xml
                        ><!
                        [endif]-->
              <!--[if !mso]><!-->
              <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i" rel="stylesheet" />
              <!--<![endif]-->
              <meta content="width=device-width" name="viewport" />
              <style>
                /* #### Mobile Phones Portrait #### */
                /* #### iPhone 4+ Portrait or Landscape #### */
                @media only screen and (max-width: 480px) {
                  table[class="contentInner"] {
                    width: 100% !important;
                    padding: 0px;
                    margin: 0px;
                  }

                  img[class="zpImage"] {
                    width: 260px !important;
                    max-width: 360px !important;
                    text-align: center;
                    margin: 0px;
                    padding: 0px;
                  }

                  body,
                  table,
                  td,
                  p,
                  a,
                  li,
                  div,
                  span,
                  blockquote {
                    -webkit-text-size-adjust: none !important;
                    margin: 0px auto;
                    line-height: 1.7;
                  }
                }

                @media only screen and (max-width: 480px) {
                  .zpImage {
                    height: auto !important;
                    width: 100% !important;
                  }
                }

                @media only screen and (max-width: 480px) {

                  .contentInner,
                  .cols,
                  .zpAlignPos {
                    width: 100% !important;
                    max-width: 100% !important;
                  }
                }

                @media only screen and (max-width: 480px) {
                  .paddingcomp {
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                  }

                  .bannerimgpad {
                    padding: 0px !important;
                  }
                }

                @media screen and (max-width: 480px) {

                  .tmplheader,
                  .tmplfooter {
                    width: 100% !important;
                    max-width: 400px !important;
                    margin: 0px auto;
                    text-align: center;
                  }
                }

                a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: none !important;
                  font-size: inherit !important;
                  font-family: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                }
              </style>
              <meta content="text/html;charset=UTF-8" http-equiv="Content-Type" />
            </head>

            <body bgcolor="#ffffff" style="
                        margin: 0;
                        padding: 0;
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 12px;
                        color: #000000;
                        ">
              <center>
                // content here.
              </center>
            </body>

            </html>
        `;
      } catch (err) {
        reject(err);
      }
    });
  }

  sendForgotMail(email, subject, code) {
    return new Promise((resolve, reject) => {
      try {
        const transporter = nodemailer.createTransport({
          host: "mail.ksmckaduna.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            // type: 'custom',
            // method: 'CRAM-MD5',
            // method: 'NTLM',
            user: "support@ksmckaduna.com", // generated ethereal user
            pass: "*vh8y5]L42NRWo", // generated ethereal password
          },
          customAuth: {
            // 'CRAM-MD5': nodemailerCramMd5,
            // NTLM: nodemailerNTLMAuth
          },
          connectionTimeout: 5 * 60 * 1000, // 5 min
          tls: {
            rejectUnauthorized: false,
          },
        });

        let message = `
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:v="urn:schemas-microsoft-com:vml">

                <head>
                <!--[if gte mso 9
                            ]><xml
                                ><o:OfficeDocumentSettings
                                ><o:AllowPNG /><o:PixelsPerInch
                                    >96</o:PixelsPerInch
                                ></o:OfficeDocumentSettings
                                ></xml
                            ><!
                            [endif]-->
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <meta content="width=device-width" name="viewport" />
                <style>
                    /* #### Mobile Phones Portrait #### */
                    /* #### iPhone 4+ Portrait or Landscape #### */
                    @media only screen and (max-width: 480px) {
                    table[class="contentInner"] {
                        width: 100% !important;
                        padding: 0px;
                        margin: 0px;
                    }

                    img[class="zpImage"] {
                        width: 260px !important;
                        max-width: 360px !important;
                        text-align: center;
                        margin: 0px;
                        padding: 0px;
                    }

                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    div,
                    span,
                    blockquote {
                        -webkit-text-size-adjust: none !important;
                        margin: 0px auto;
                        line-height: 1.7;
                    }
                    }

                    @media only screen and (max-width: 480px) {
                    .zpImage {
                        height: auto !important;
                        width: 100% !important;
                    }
                    }

                    @media only screen and (max-width: 480px) {

                    .contentInner,
                    .cols,
                    .zpAlignPos {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    }

                    @media only screen and (max-width: 480px) {
                    .paddingcomp {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }

                    .bannerimgpad {
                        padding: 0px !important;
                    }
                    }

                    @media screen and (max-width: 480px) {

                    .tmplheader,
                    .tmplfooter {
                        width: 100% !important;
                        max-width: 400px !important;
                        margin: 0px auto;
                        text-align: center;
                    }
                    }

                    a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    }
                </style>
                <meta content="text/html;charset=UTF-8" http-equiv="Content-Type" />
                </head>

                <body bgcolor="#ffffff" style="
                            margin: 0;
                            padding: 0;
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 12px;
                            color: #000000;
                            ">
                <center>
                    // content here.
                    ${code}
                </center>
                </body>

            </html>
        `;

        var mailOptions = {
          from: "KsmcKaduna <noreply@ksmckaduna.com>",
          to: email,
          subject: subject,
          html: `${message}`,
        };

        transporter.sendMail(mailOptions, function (error, res) {
          if (error) {
            // console.log(error);
            // badJsonWithRes("Unable to unable to send mail" + error)
            reject("Unable to unable to send mail" + error);
          } else {
            // console.log('Email sent: ' + res.response);
            resolve("Email sent: " + res.response, 201);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  sendMail(email, subject, code) {
    return new Promise((resolve, reject) => {
      
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          service: 'gmail',
          secure: true,
          auth: {
            user: 'opecopec27@gmail.com',
            pass: 'mliybcaavzmgwgic',
          }
        });

        // Gmail:Opecopec27@gmail.com
        // Password:1111opee

        let message = `
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:v="urn:schemas-microsoft-com:vml">

                <head>
                <!--[if gte mso 9
                            ]><xml
                                ><o:OfficeDocumentSettings
                                ><o:AllowPNG /><o:PixelsPerInch
                                    >96</o:PixelsPerInch
                                ></o:OfficeDocumentSettings
                                ></xml
                            ><!
                            [endif]-->
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <meta content="width=device-width" name="viewport" />
                <style>
                    /* #### Mobile Phones Portrait #### */
                    /* #### iPhone 4+ Portrait or Landscape #### */
                    @media only screen and (max-width: 480px) {
                    table[class="contentInner"] {
                        width: 100% !important;
                        padding: 0px;
                        margin: 0px;
                    }

                    img[class="zpImage"] {
                        width: 260px !important;
                        max-width: 360px !important;
                        text-align: center;
                        margin: 0px;
                        padding: 0px;
                    }

                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    div,
                    span,
                    blockquote {
                        -webkit-text-size-adjust: none !important;
                        margin: 0px auto;
                        line-height: 1.7;
                    }
                    }

                    @media only screen and (max-width: 480px) {
                    .zpImage {
                        height: auto !important;
                        width: 100% !important;
                    }
                    }

                    @media only screen and (max-width: 480px) {

                    .contentInner,
                    .cols,
                    .zpAlignPos {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    }

                    @media only screen and (max-width: 480px) {
                    .paddingcomp {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }

                    .bannerimgpad {
                        padding: 0px !important;
                    }
                    }

                    @media screen and (max-width: 480px) {

                    .tmplheader,
                    .tmplfooter {
                        width: 100% !important;
                        max-width: 400px !important;
                        margin: 0px auto;
                        text-align: center;
                    }
                    }

                    a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    }
                </style>
                <meta content="text/html;charset=UTF-8" http-equiv="Content-Type" />
                </head>

                <body bgcolor="#ffffff" style="
                            margin: 0;
                            padding: 0;
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 12px;
                            color: #000000;
                            ">
                <div>
                    
                    ${code}
                </div>
                </body>

            </html>
        `;

        var mailOptions = {
          from: "Opecopec <opecopec27@gmail.com>",
          to: email,
          subject: subject,
          html: `${message}`,
        };

        transporter.sendMail(mailOptions, function (error, res) {
          if (error) {
            // console.log(error);
            // badJsonWithRes("Unable to unable to send mail" + error)
            reject("Unable to unable to send mail" + error);
          } else {
            // console.log('Email sent: ' + res.response);
            resolve("Email sent: " + res.response, 201);
          }
        });
    });
  }
}
module.exports = EmailService;
