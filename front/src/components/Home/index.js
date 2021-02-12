import React from 'react'

import { Paper } from '@material-ui/core'

import Header from '../Header'

import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Header />
    </Paper>
  )
}

export default Home
