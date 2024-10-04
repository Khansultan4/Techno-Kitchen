const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { Item } = require('../../db/models');

const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), async (req, res) => {
  const { title, description, price, specifications, TypeId } = req.body;
  let image = null;
  if (req.file) {
    image = `/uploads/${req.file.filename}`;
  }
  try {
    const newItem = await Item.create({
      title,
      description,
      price,
      TypeId: Number(TypeId),
      image,
      specifications: JSON.parse(specifications),
    });
    res.json(newItem);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
