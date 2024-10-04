const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { Item } = require('../../db/models');
const { where } = require('sequelize');

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

router.put('/edit/:id', upload.single('image'), async (req, res) => {
  const { title, description, price, specifications, TypeId } = req.body;
  const { id } = req.params;
  let image = null;
  if (req.file) {
    image = `/uploads/${req.file.filename}`;
  }
  try {
    const editingItem = await Item.findOne({ where: { id } });

    if (editingItem) {
      await editingItem.update({
        title: title || editingItem.title,
        description: description || editingItem.description,
        price: Number(price) || editingItem.price,
        TypeId: Number(TypeId) || editingItem.TypeId,
        specifications:
          JSON.parse(specifications) || editingItem.specifications,
        image: image || editingItem.image,
      });
      res.json(editingItem);
    } else {
      res.status(500).json({ message: 'Cannot find Item' });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletingItem = await Item.findOne({ where: { id } });

    if (deletingItem) {
      await deletingItem.destroy();
      res.json(deletingItem);
    } else {
      console.log('Item does not exist');
    }
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
});

module.exports = router;
