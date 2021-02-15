import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import {
  Container, Box, Typography, IconButton
} from '@material-ui/core'

import { actions as statisticsActions } from '../../state/ducks/statistics'

const Player = ({ name, nameTournament, lastWon }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Box>
        <IconButton onClick={() => dispatch(statisticsActions.hidePlayerData())}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography>
          {`${name} ganó por última ves el ${nameTournament} el ${lastWon}`}
        </Typography>
      </Box>
    </Container>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  nameTournament: PropTypes.string.isRequired,
  lastWon: PropTypes.string.isRequired
}

export default Player
