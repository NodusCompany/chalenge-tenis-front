import React from 'react'

import PropTypes from 'prop-types'

import { Button, Box } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { actions as sectionActions } from '../../state/ducks/section'

import useStyles from './styles'

const NavItem = ({
  id, title
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(sectionActions.sectionSelected({ id }))
  }

  return (
    <Box>
      <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.button} onClick={handleClick}>
        {title}
      </Button>
    </Box>
  )
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NavItem
