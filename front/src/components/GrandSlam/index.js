import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import TableData from './TableData'
import Player from './Player'

import { actions as statisticsActions } from '../../state/ducks/statistics'

const GrandSlam = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: Mejorar formato del player en el state
  const {
    showPlayer,
    data: {
      name, nameTournament, lastWon
    }
  } = useSelector((state) => state.statistics.player)

  return (
    <>
      {
        !showPlayer && (
          <TableData />
        )
      }
      {
        showPlayer && (
          <Player
            name={name}
            nameTournament={nameTournament}
            lastWon={lastWon}
          />
        )
      }
    </>
  )
}

export default GrandSlam
