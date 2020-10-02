const express = require('express');

const router = express.Router();
const Player = require('../schemas/player');

/**
 *  Gets all Players
 * @param {Request} req 
 * @param {Response} res 
 */
async function getAllPlayers(req, res) {
  try {
    const results = await Player.find();
    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send(err);
  }
}

/**
 * gets one player by ID
 * @param {Request} req 
 * @param {Response} res 
 */
async function getOnePlayerById(req, res) {
  try {
    const result = await Player.findOne({
      _id: new Object(req.params.playerId)
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

router.get('/player', getAllPlayers);
router.get('/player/:playerId', getOnePlayerById);

module.exports = router;
