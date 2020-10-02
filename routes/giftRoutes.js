const express = require('express');

const router = express.Router();
const Player = require('../schemas/player');
const Gift = require('../schemas/gifts');

async function getAllGifts(res, req) {
  try {
    const result = await Gift.find();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function getOneGiftById(res, req) {
  try {
    const result = await Gift.findOne({
      _id: req.params.giftId
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function stealAGift(res, req) {
  try {
    const gift = Gift.findOne({
      _id: req.body.giftId
    });
    gift.giftOwner = req.body.newOwner;
    if (!gift.showName) {
      gift.showName = true;
    }
    await gift.save();
  } catch (err) {
    res.status
  }
}

router.get('/gifts', getAllGifts);
router.get('/gifts/:giftId', getOneGiftById);
router.put('/gifts/steal', stealAGift);

module.exports = router;
