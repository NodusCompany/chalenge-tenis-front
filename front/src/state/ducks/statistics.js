import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getLastWinner } from '../../utils/apiConfig'
import { getTournaments } from '../../utils/configQueries'

const getGrandSlamWinner = createAsyncThunk(
  'statistics/getGrandSlamWinner',
  async () => {
    const winner = 'Nadal'
    return winner
  }
)

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
      maxWinner: name.map((n) => n)
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

const statistics = createSlice({
  name: 'statistics',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: {
    [getWinner.fulfilled]: (draftState, { payload: { data } }) => {
      draftState.data.push(data)
    }
  }
})

export default statistics.reducer

const actions = { ...statistics.actions, getGrandSlamWinner, getData }
export { actions }
