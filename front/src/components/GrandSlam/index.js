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
    id: idPlayer, name, tournament, lastWon
  } = useSelector((state) => state.statistics.player)

  return (
    <>
      {
        !idPlayer && (
          <TableData />
        )
      }
      {
        idPlayer && (
          <Player
            name={name}
            tournament={tournament}
            lastWon={lastWon}
          />
        )
      }
    </>
  )
}

export default GrandSlam
