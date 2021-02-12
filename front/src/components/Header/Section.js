import React, { useState } from 'react'

import {
  Menu, MenuItem, Button, Box
} from '@material-ui/core'

import PropTypes from 'prop-types'

import useStyles from './styles'

const Section = ({
  id, title, items
}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box key={id}>
      <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.button} onClick={handleClick}>
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          items.map((i) => (
            <MenuItem onClick={handleClose}>{i}</MenuItem>
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
