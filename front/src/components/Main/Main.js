import React from 'react'

import {
  Container, Typography
} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <Typography variant="body1" className={classes.body1}>
        SECCIÓN EN CONSTRUCCIÓN
      </Typography>
    </Container>
  )
}

export default Main
