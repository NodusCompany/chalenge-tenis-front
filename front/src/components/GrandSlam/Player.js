import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  Container
} from '@material-ui/core'

import { actions as statisticsActions } from '../../state/ducks/statistics'

const GrandSlam = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    id: idPlayer, name, tournament, lastWon
  } = useSelector((state) => state.statistics.player)

  return (
    <Container>
      {idPlayer}
      {name}
      {tournament}
      {lastWon}
    </Container>
  )
}

export default GrandSlam
