const router = require('express').Router();

const {
  getWinnerController,
  getLastDateWon
} = require('./../controllers/spreadsheetController');

router.get('/:tournament', getWinnerController);
router.get('/:tournament/date/:player', getLastDateWon);

module.exports = router;
