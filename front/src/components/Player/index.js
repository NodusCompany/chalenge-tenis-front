import React from 'react'

import {
  Container, Typography
} from '@material-ui/core'

import useStyles from './styles'

const Player = () => {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <Typography>
        JUGADOR
      </Typography>
    </Container>
  )
}

export default Player
