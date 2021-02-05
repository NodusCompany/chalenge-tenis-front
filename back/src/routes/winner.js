const router = require('express').Router();

const {
  getWinnerController,
  getLastDateWon
} = require('./../controllers/spreadsheetController');

router.get('/:tournament', getWinnerController);
router.post('/:tournament/date', getLastDateWon);

module.exports = router;
