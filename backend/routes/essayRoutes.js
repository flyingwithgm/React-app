const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { reviewEssay } = require('../controllers/essayController');

// Review essay with AI
router.post('/review', protect, reviewEssay);

module.exports = router;
