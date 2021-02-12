import React from 'react'

import {
  Box, Paper, Container
} from '@material-ui/core'

import Header from '../Header'
import Section from '../Section'

import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Box>
      <Paper className={classes.root}>
        <Header />
      </Paper>
      <Container>
        <Section />
      </Container>
    </Box>
  )
}

export default Home
