const express = require('express');
const router = new express.Router(); 
const Item = require('../models/champ');

router.get('/', async (req, res, next) => {
  try {
    

  } catch (err) {
    next(err);
  }
});

module.exports = router; 