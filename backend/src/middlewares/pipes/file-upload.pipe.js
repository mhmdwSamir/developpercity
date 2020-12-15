const multer = require('multer');
const http_status_code = require('./../../helpers/http_status_code');
const fsPath = require('path');

/**
 * @param {{ path: string; fileNameCb: (file: Express.Multer.File, req: Express.Request) => string, mimeTypes: string[]; maxFileSize: number; }} param0 
 * @returns {multer.Multer}
 */
module.exports = ({ path, fileNameCb, mimeTypes, maxFileSize }) => {
    if (!mimeTypes) {
        mimetypes = ['images'];
    }

    const diskStorageOption = { destination: fsPath.resolve(path) };
    if (fileNameCb) {
        diskStorageOption.filename = (req, file, cb) => {
            cb(null, fileNameCb(file, req));
        }
    }
    const storage = multer.diskStorage(diskStorageOption);
    const multerFilter = (req, file, cb) => {
        if (mimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new Exception(
                    `Please Upload Only [ ${mimeTypes.join(', ')} ]`,
                    http_status_code.Not_Acceptable,
                    'HUSLJhh44'
                ),
                null
            );
        }
    }
    const multerOptions = { storage, multerFilter };
    if (maxFileSize != null) {
        multerOptions.limits = { fileSize: maxFileSize };
    }

    return multer(multerOptions);
}