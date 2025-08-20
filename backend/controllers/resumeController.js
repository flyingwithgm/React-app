const Resume = require('../models/Resume');

// Get all resumes for logged-in user
const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user._id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new resume
const createResume = async (req, res) => {
  const { template, content } = req.body;

  try {
    const resume = new Resume({
      user: req.user._id,
      template,
      content,
    });
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getResumes, createResume };
