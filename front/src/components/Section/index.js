import React from 'react'

import { useSelector } from 'react-redux'
import BuildSection from './BuildSection'
import GrandSlam from './GrandSlam'

const Section = () => {
  const isShow = useSelector((state) => state.section.sectionOpen)
  const { id } = useSelector((state) => state.section.section)

  const sectionComponents = new Map([
    // TODO: Al escalar la applicación se deben agregar acá los nuevos componentes
    ['grandSlam', GrandSlam]
  ])

  const Selected = isShow && sectionComponents.get(id)

  return (
    <>
      {
        !isShow && (
          // TODO: Eliminar componente al finalizar la applicación
          <BuildSection />
        )
      }
      {Selected && <Selected />}
    </>
  )
}

export default Section
