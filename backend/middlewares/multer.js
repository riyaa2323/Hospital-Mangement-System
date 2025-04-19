import multer from "multer";

const storage = multer.memoryStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },

});
const upload = multer({storage })
export default upload;