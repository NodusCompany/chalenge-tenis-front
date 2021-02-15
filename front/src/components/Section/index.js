import React from 'react'

import { useSelector } from 'react-redux'
import Main from '../Main/Main'

import Container from './Container'
import GrandSlam from '../GrandSlam'

const Section = () => {
  const isShow = useSelector((state) => state.section.sectionOpen)
  const { id } = useSelector((state) => state.section.section)

  const sectionComponents = new Map([
    // TODO: Al escalar la applicación se deben agregar acá los nuevos componentes
    ['main', Main],
    ['grandSlam', GrandSlam]
  ])

  const Selected = isShow && sectionComponents.get(id)

  return (
    <Container>
      {Selected && <Selected />}
    </Container>
  )
}

export default Section
