const express = require('express');
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getAdminBlogs,
} = require('../controllers/blogController');
const { adminLogin } = require('../controllers/authController');
const adminAuth = require('../middleware/adminAuth');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/admin/login', adminLogin);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:slug', getSingleBlog);
router.post('/blogs', adminAuth, upload.single('image'), createBlog);
router.put('/blogs/:id', adminAuth, upload.single('image'), updateBlog);
router.delete('/blogs/:id', adminAuth, deleteBlog);
router.get('/admin/blogs', adminAuth, getAdminBlogs);

module.exports = router;
