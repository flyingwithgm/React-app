const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createResume, getResumes } = require('../controllers/resumeController');

// Get all resumes for user
router.get('/', protect, getResumes);

// Create a new resume
router.post('/', protect, createResume);

module.exports = router;
