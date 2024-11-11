const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({
  storage, 
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb('Error: Only images (JPEG, JPG, PNG) are allowed'); 
    }
  },
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Error: No file uploaded.');
  }

  res.json({
    message: 'File uploaded successfully!',
    file: req.file,
  });
});

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
