import React from 'react'

import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'
import {
  Container, Typography
} from '@material-ui/core'

import { getSection } from '../../utils/configQueries'

import useStyles from './styles'

const ContainerSection = ({ children }) => {
  const classes = useStyles()

  const { id } = useSelector((state) => state.section.section)

  const { title, description } = getSection(id)
  return (
    <Container className={classes.container}>
      <Typography>
        { title }
      </Typography>
      <Typography>
        { description }
      </Typography>
      { children }
    </Container>
  )
}

ContainerSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default ContainerSection
