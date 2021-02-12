import React from 'react'

import {
  AppBar, Toolbar, IconButton, Typography, Tabs
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import NavItem from './NavItem'
import { getTitle, getItemsNavBar } from '../../utils/configQueries'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  const title = getTitle()
  const Items = getItemsNavBar()

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
          Items.map(({
            id, title: t, description
          }) => (
            <NavItem
              id={id}
              title={t}
              description={description}
            />
          ))
        }
      </Tabs>
    </AppBar>
  )
}

export default Home
