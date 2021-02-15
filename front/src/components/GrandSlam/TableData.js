import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  Paper, Table, TableBody, Link,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

import { actions as statisticsActions } from '../../state/ducks/statistics'

import useStyles from '../Section/styles'

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

const TableData = () => {
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
          {Object.keys(data).map((id) => (
            <TableRow key={id}>
              {
                Object.keys(data[id]).filter((k) => k !== 'id').map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell key={index} align="center">
                    {
                      item !== 'maxWinner' ? data[id][item] : (
                        data[id][item].map((player) => (
                          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                          <Link
                            key={player}
                            href="#"
                            onClick={() => (
                              dispatch(statisticsActions.playerDataRequest({
                                tournament: data[id].id, player
                              }))
                            )}
                          >
                            {`${player} `}
                          </Link>
                        ))
                      )
                    }
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

export default TableData
