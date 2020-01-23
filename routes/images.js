const { Router } = require('express'); 

const router = new Router();

const path = require('path');
const multer = require('multer');
const multerConfig = require("../routes/multerr");
var upload = multer({ dest: 'upload/1/imagenes/' })
// RENDER FORM UPLOAD
router.get('/upload', (req, res) => {
    res.render('index');
});



const storage = multer.diskStorage({
 
    destination: path.join(__dirname, '../public/upload'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000}
}).single('image');





router.post('/upload', (req, res) => {
     //#endregion
    // console.log(req.file);
    // console.log(req.body);
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.send(err);
        }
        console.log("req.file");
        console.log(req.file);
        console.log("req.destination)");
        console.log(req.destination);
        res.send({"status":true,
                "destino":req.file.destination,
                "nombre":req.file.filename,
                "path":req.file.path
             });
    });
});

// router.post('/test', multerConfig.saveToUploads, (req, res) => {
//     console.log(req.file);
    
//     return res.json("file uploaded successfully");
// });

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    console.log(req.body);
  });

router.get('/images', (req, res) => {});


module.exports = router;