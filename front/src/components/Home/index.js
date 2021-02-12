import React from 'react'

import {
  Box, Paper
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
      <Section />
    </Box>
  )
}

export default Home
