import React from 'react'

import {
  AppBar, Toolbar, IconButton, Typography, Tabs, Tab
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useDispatch } from 'react-redux'
import { actions as sectionActions } from '../../state/ducks/section'

import { getTitle, getItemsNavBar } from '../../utils/configQueries'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()
  const title = getTitle()
  const Items = getItemsNavBar()

  const [value, setValue] = React.useState(0)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(sectionActions.sectionSelected({ id }))
  }
  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
      <Tabs value={value} onChange={handleChange}>
        {
          Items.map(({
            id, title: t
          }) => (
            <Tab
              key={id}
              label={t}
              onClick={() => handleClick(id)}
            />
          ))
        }
      </Tabs>
    </AppBar>
  )
}

export default Home
