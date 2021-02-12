import React from 'react'

import {
  Container, Typography
} from '@material-ui/core'

import useStyles from './styles'

const BuildSection = () => {
  const classes = useStyles()

  return (
    <Container className={classes.buildSection}>
      <Typography>
        SECCIÓN EN CONSTRUCCIÓN
      </Typography>
    </Container>
  )
}

export default BuildSection
