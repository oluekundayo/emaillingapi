const express = require("express");
const otherRouter = express.Router();
const controlController = require("../../controllers/controlController");
const uploadFile = require("../../services/uploadFilesService");

const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })



// >>>>>>>>>>>>> Nav Data >>>>>>>>>

otherRouter.route('/email')
.post( controlController.createControl )
.get( (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supprted on User')
})
.put( (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supprted on User')
})
.delete( (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supprted on User')
});



module.exports = otherRouter;