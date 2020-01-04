const express = require('express');
const router = new express.Router(); 
const Item = require('../models/item');

router.post('/:itemTag', async (req, res, next) => {
  try {
    console.log('got an item');
    const { itemTag } = req.params; 
    const { currentChampStats, currentLevel, baseStats } = req.body;

    let itemStats = await Item.applyItemStats(itemTag, currentChampStats, currentLevel, baseStats); 
    return res.json(itemStats);
  } catch (err) {
    next(err);
  }
});

module.exports = router; 