const axios = require('axios');

// AI Essay Review using DeepSeek API
const reviewEssay = async (req, res) => {
  const { essayText } = req.body;

  if (!essayText) return res.status(400).json({ message: 'Essay text is required' });

  try {
    const response = await axios.post('https://api.deepseek.ai/v1/review', 
      { text: essayText }, 
      { headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` } }
    );

    res.json({ review: response.data });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: 'AI review failed' });
  }
};

module.exports = { reviewEssay };
