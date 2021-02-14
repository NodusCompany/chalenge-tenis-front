import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

import { actions as statisticsActions } from '../../state/ducks/statistics'

import useStyles from '../Section/styles'

// TODO: El componente no debería conocer los ids
const columns = [
  {
    id: 'title',
    value: 'Torneo'
  },
  {
    id: 'oficialName',
    value: 'Nombre oficial'
  },
  {
    id: 'place',
    value: 'Lugar'
  },
  {
    id: 'sup',
    value: 'Superficie'
  },
  {
    id: 'lastChampion',
    value: 'Campeón actual'
  },
  {
    id: 'maxWinner',
    value: 'Máximo ganador'
  }
]

const GrandSlam = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(statisticsActions.getData())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = useSelector((state) => state.statistics.data)

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columns.map(({ id: idx, value }) => (
                <TableCell key={idx} align="center">
                  {value}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {
                Object.keys(row).filter((k) => k !== 'id').map((key) => (
                  <TableCell key={row[key]} align="center">
                    {row[key]}
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GrandSlam
