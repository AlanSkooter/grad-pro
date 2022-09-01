const reviewsModel = require('../services/reviews');
const { createNewReview, getReviewsList } = require('../services/data-client');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

exports.getReviews = async (req, res) => {
    const reviews = await getReviewsList();
    res.send(reviews);
}

exports.uploadReview = async (req, res) => {
    const success = await reviewsModel.upload(req);
    const textReview = success.fields.review;
    const imageName = success.files.multipleFiles.originalFilename;
    const newReview = {
        textReview: textReview,
        imageName: imageName
    };
    const image = fs.readFileSync(path.resolve(process.cwd(), './public/images/original/', imageName));
        sharp(image)
        .resize(400, 300)
        .toFile(path.resolve(process.cwd(), './public/images/', imageName));
    const review = await createNewReview(newReview);
    res.send(review);
}
