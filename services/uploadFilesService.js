const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    } else {
        cb(null, true);
    }
}

const uploadFile = multer({
    storage: storage,
    limits: {fieldSize: 1},
    fileFilter: imageFileFilter
})

// console.log('was here');

module.exports = uploadFile;