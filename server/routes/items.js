const express = require('express');
const router = new express.Router(); 
const Item = require('../models/item');

router.post('/:itemTag', async (req, res, next) => {
  try {
    console.log('got an item');
    const { itemTag } = req.params; 
    const { champStats } = req.body;

    let itemStats = await Item.applyItemStats(itemTag, champStats); 
    return res.json(itemStats);
  } catch (err) {
    next(err);
  }
});

module.exports = router; 