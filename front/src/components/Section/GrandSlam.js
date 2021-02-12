import React from 'react'

// import { useSelector } from 'react-redux'
import {
  Container, Typography
} from '@material-ui/core'

import useStyles from './styles'

const GrandSlam = () => {
  const classes = useStyles()

  // const { title } = useSelector((state) => state.section.sectionSelected)
  return (
    <Container className={classes.grandSlam}>
      <Typography>
        GRAND SLAM
      </Typography>
    </Container>
  )
}

export default GrandSlam
