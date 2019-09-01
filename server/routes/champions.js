const express = require('express');
const router = new express.Router(); 
const Champ = require('../models/champ');

router.get('/', async (req, res, next) => {
  try {
    const champNames = await Champ.getListOfNames(); 
    return res.json(champNames);
  } catch (err) {
    next(err);
  }
});


router.get('/sort', async (req, res, next) => {
  try {
    const { sort } = req.query;
    const newChampOrder = await Champ.getOrderByStat(sort);
    return res.json(newChampOrder);
  } catch (err) {
    next(err);
  }
});

router.get('/:name', async (req, res, next ) => {
  try {
    const { name } = req.params;
    const baseStats = await Champ.getChampStats(name);
    return res.json(baseStats);
  } catch (err) {
    next(err);
  }
});


module.exports = router; 