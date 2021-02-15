import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Table from './Table'
import Player from './Player'

import { actions as statisticsActions } from '../../state/ducks/statistics'

const GrandSlam = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { id: idPlayer } = useSelector((state) => state.statistics.player)

  return (
    <>
      {
        !idPlayer && (
          <Table />
        )
      }
      {
        idPlayer && (
          <Player />
        )
      }
    </>
  )
}

export default GrandSlam
