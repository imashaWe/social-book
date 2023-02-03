const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const directory = 'socialbook/';

const upload = async (filePath) => {
    try {
        return await cloudinary.uploader.upload(filePath, {
            folder: directory,
            resource_type: 'auto'
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {upload}
