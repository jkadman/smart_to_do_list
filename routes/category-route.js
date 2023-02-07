const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('id:', req.params.id);
  res.render("category-page");
});

module.exports = router;
