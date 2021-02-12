import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './ducks'

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware()
    return middleware
  }
})
