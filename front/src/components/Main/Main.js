import React from 'react'

import {
  Container, Typography
} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <Typography>
        SECCIÓN EN CONSTRUCCIÓN
      </Typography>
    </Container>
  )
}

export default Main
