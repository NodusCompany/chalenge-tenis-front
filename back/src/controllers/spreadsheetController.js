const { getWinner, getLastDate } = require('./../services/SpreadsheetService');

const getWinnerController = async (req, res) => {
  try {
    const { tournament } = req.params;
    const winner = await getWinner(tournament);
    res.send(winner);
  } catch (error) {
    console.log(error);
  }
};

const getLastDateWon = async (req, res) => {
  try {
    const { tournament } = req.params;
    const { player } = req.body;
    const date = await getLastDate(player, tournament);
    res.send(date);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getWinnerController,
  getLastDateWon
};
