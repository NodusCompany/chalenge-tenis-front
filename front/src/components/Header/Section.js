import React, { useState } from 'react'

import PropTypes from 'prop-types'

import {
  Menu, MenuItem, Button, Box
} from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { actions as sectionActions } from '../../state/ducks/section'

import useStyles from './styles'

const Section = ({
  id, title, items
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (idItem) => {
    dispatch(sectionActions.sectionSelected({ id, idItem }))
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.button} onClick={handleClick}>
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        {
          items.map(({ id: idItem, title: titleItem }) => (
            <MenuItem key={idItem} onClick={() => handleClose(idItem)}>{titleItem}</MenuItem>
          ))
        }
      </Menu>
    </Box>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Section
