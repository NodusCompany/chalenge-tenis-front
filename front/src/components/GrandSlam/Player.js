import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import {
  Container
} from '@material-ui/core'

import { actions as statisticsActions } from '../../state/ducks/statistics'

const Player = ({ name, tournament, lastWon }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {name}
      {tournament}
      {lastWon}
    </Container>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  tournament: PropTypes.string.isRequired,
  lastWon: PropTypes.string.isRequired
}

export default Player
