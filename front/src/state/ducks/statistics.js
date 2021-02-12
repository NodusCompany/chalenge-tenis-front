import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const getGrandSlamWinner = createAsyncThunk(
  'statistics/getGrandSlamWinner',
  async () => {
    const winner = 'Nadal'
    return winner
  }
)

const statistics = createSlice({
  name: 'statistics',
  initialState: {
    grandSlam: ''
  },
  reducers: {},
  extraReducers: {
    [getGrandSlamWinner.pending]: (draftState, { payload: { winner } }) => {
      draftState.grandSlam = winner
    }
  }
})

export default statistics.reducer

const actions = { ...statistics.actions, getGrandSlamWinner }
export { actions }
