const express = require('express');
const axios = require('axios');

const router = express.Router();

// Get products from external API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
