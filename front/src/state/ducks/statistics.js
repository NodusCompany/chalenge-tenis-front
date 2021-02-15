import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getLastWinner, getLastTimeWon } from '../../utils/apiConfig'
import { getTournaments, getTournamentName } from '../../utils/configQueries'

const getWinner = createAsyncThunk(
  'statistics/getWinner',
  async ({ id, endpoint }) => {
    const resp = await fetch(endpoint)
    const { name } = await resp.json()

    const {
      title,
      oficialName,
      place,
      sup,
      lastChampion
    } = getTournaments().find(({ id: idx }) => idx === id)

    const data = {
      id,
      title,
      oficialName,
      place,
      sup,
      lastChampion,
      maxWinner: name.map((n) => `${n}`)
    }
    return { data }
  }
)

const getData = createAsyncThunk(
  'statistics/getData',
  // eslint-disable-next-line no-unused-vars
  async (_, { dispatch }) => {
    const tournaments = getTournaments()
    const endpoints = tournaments.map(({ id }) => {
      const endpoint = {
        id,
        endpoint: getLastWinner({ tournament: id })
      }
      return endpoint
    })

    endpoints.forEach(({ id, endpoint }) => {
      dispatch(getWinner({ id, endpoint }))
    })
  }
)

const playerDataRequest = createAsyncThunk(
  'statistics/playerDataRequest',
  async ({ tournament, player }) => {
    const url = getLastTimeWon({ tournament })

    const requestOptions = {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // TODO: No funciona con JSON.stringify({ player })
      body: `{ "player": "${player}" }`
    }
    const resp = await fetch(url, requestOptions)
    const { lastDayWon, lastMonthWon, lastYearWon } = await resp.json()

    const data = {
      id: player,
      name: player,
      tournament,
      nameTournament: getTournamentName({ tournament }),
      lastWon: `${lastDayWon}/${lastMonthWon}/${lastYearWon}`
    }
    return { data }
  }
)

const statistics = createSlice({
  name: 'statistics',
  initialState: {
    data: {},
    player: { showPlayer: false, data: {} }
  },
  reducers: {
    hidePlayerData: (draftState) => {
      draftState.player.showPlayer = false
    }
  },
  extraReducers: {
    [getWinner.fulfilled]: (draftState, { payload: { data } }) => {
      draftState.data[data.id] = data
    },
    [playerDataRequest.fulfilled]: (draftState, { payload: { data } }) => {
      draftState.player = { showPlayer: true, data }
    }
  }
})

export default statistics.reducer

const actions = { ...statistics.actions, getData, playerDataRequest }
export { actions }
