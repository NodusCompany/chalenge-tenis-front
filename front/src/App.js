import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

export const ModalContext = React.createContext({ isModalOpen: true })

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}
