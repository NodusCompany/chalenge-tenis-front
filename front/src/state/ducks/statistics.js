import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getLastWinner, getLastTimeWon } from '../../utils/apiConfig'
import { getTournaments } from '../../utils/configQueries'

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
      maxWinner: name.map((n) => `${n} `)
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

    const resp = await fetch(url, {
      method: 'POST',
      body: { player }
    })

    const { lastDayWon, lastMonthWon, lastYearWon } = await resp.json()

    const data = {
      id: player,
      name: player,
      tournament,
      lastWon: `${lastDayWon}/${lastMonthWon}/${lastYearWon}`
    }
    return { data }
  }
)

const statistics = createSlice({
  name: 'statistics',
  initialState: {
    data: [],
    player: false
  },
  reducers: {},
  extraReducers: {
    [getWinner.fulfilled]: (draftState, { payload: { data } }) => {
      // TODO: evitar info repetida
      draftState.data.push(data)
    },
    [playerDataRequest.fulfilled]: (draftState, { payload: { data } }) => {
      // TODO: evitar info repetida
      draftState.player = data
    }
  }
})

export default statistics.reducer

const actions = { ...statistics.actions, getData, playerDataRequest }
export { actions }
