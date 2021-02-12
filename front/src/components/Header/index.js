import React from 'react'

import {
  AppBar, Toolbar, IconButton, Typography, Tabs
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Section from './Section'
import { getTitle, getItemsNavBar } from '../../utils/configQueries'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  const title = getTitle()
  const Sections = getItemsNavBar()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
      <Tabs className={classes.tabs}>
        {
          Sections.map(({
            id, title: t, items
          }) => (
            <Section
              id={id}
              title={t}
              items={items}
            />
          ))
        }
      </Tabs>
    </AppBar>
  )
}

export default Home
