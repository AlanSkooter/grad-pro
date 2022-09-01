const formidable = require('formidable');

exports.upload = (req) => new Promise(((resolve, reject) => {
    formidable({
        uploadDir: `${process.cwd()}/public/images/original`,
        multiples: true,
        filename: ($, _, {originalFilename}) => `${originalFilename}`,
    })
        .parse(req, (err, fields, files) => {
            err ? reject(err) : resolve({ fields, files });
        })
}));
