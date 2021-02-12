import { createSlice } from '@reduxjs/toolkit'

const section = createSlice({
  name: 'section',
  initialState: {
    sectionOpen: false,
    section: {}
  },
  reducers: {
    sectionSelected: (draftState, { payload: { id, idItem } }) => {
      draftState.sectionOpen = true
      draftState.section = { id, idItem }
    }
  }
})

export default section.reducer

const actions = { ...section.actions }
export { actions }
