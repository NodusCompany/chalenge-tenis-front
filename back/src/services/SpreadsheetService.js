const { google } = require('googleapis');
const sheets = google.sheets('v4');

const key = 'AIzaSyAvF0S69382qC3qohaUmSDwlt890w-ZvTE';
const spreadsheetId = '1GZu4w8_NiJS8I1--C-N5O2dPoj_Bv-ojekMRDS2ToMQ';
const sheetName = 'tournaments_1877-2017_unindexed_csv';

const getWinner = async (tournament) => {
  try {
    let winners = {};
    let count = 0;
    let mostWins = [];
    let numberofWins = 0;
    const tournamentWinners = [];

    const spreadsheet = await sheets.spreadsheets.values.get({
      key,
      spreadsheetId,
      range: `${sheetName}!E2:P4115`
    });

    spreadsheet.data.values.forEach((row) => {
      if (row[0] === tournament) {
        tournamentWinners.push(row[row.length - 1]);
      }
    });

    const winnerSet = new Set([...new Set(tournamentWinners)]);

    for (item of winnerSet) {
      tournamentWinners.forEach((winner) => {
        if (winner === item) count++;
      });
      winners[item] = count;
      count = 0;
    }

    for (const item in winners) {
      if (winners[item] >= numberofWins) {
        numberofWins = winners[item];
      }
    }

    for (const item in winners) {
      if (winners[item] === numberofWins) {
        mostWins.push(item);
      }
    }

    return {
      name: mostWins
    };
  } catch (error) {
    console.log(error);
  }
};

const getLastDate = async (player, tournament) => {
  try {
    let lastYearWon = 1876;
    let lastDayWon = 1;
    let lastMonthWon = 1;

    const spreadsheet = await sheets.spreadsheets.values.get({
      key,
      spreadsheetId,
      range: `${sheetName}!A2:P4115`
    });

    spreadsheet.data.values.forEach((row) => {
      if (row[4] === tournament && row[15] === player) {
        if (Number(row[0]) > lastYearWon) {
          lastYearWon = Number(row[0]);
        }
        if (Number(row[0]) > lastDayWon) {
          lastDayWon = Number(row[8]);
        }
        if (Number(row[0]) > lastMonthWon) {
          lastMonthWon = Number(row[7]);
        }
      }
    });
    return {
      lastDayWon,
      lastMonthWon,
      lastYearWon
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getWinner,
  getLastDate
};
