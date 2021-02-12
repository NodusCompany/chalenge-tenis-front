import React from 'react'

import { useSelector } from 'react-redux'
import {
  Container, Paper, Typography, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

import { getSection } from '../../utils/configQueries'

import useStyles from './styles'

const columns = [
  'Torneo',
  'Nombre oficial',
  'Lugar',
  'Superficie',
  'Sitio web oficial',
  'Campeón actual',
  'Máximo ganador'
]
const rows = [
  {
    id: 'usOpen',
    title: 'US OPEN',
    oficialName: 'US Open',
    place: 'Nueva York, Estados Unidos',
    sup: 'Dura',
    webSite: 'http://www.usopen.org/',
    lastChampion: 'Dominic Thiem',
    maxWinner: 'Lopez Gonzalo'
  },
  {
    id: 'australianOpen',
    title: 'AUSTRALIAN OPEN'
  },
  {
    id: 'wimbledon',
    title: 'WIMBLEDON'
  },
  {
    id: 'rolandGarros',
    title: 'ROLAND GARROS'
  }
]

const GrandSlam = () => {
  const classes = useStyles()

  const { id } = useSelector((state) => state.section.section)

  const { title, description } = getSection(id)
  return (
    <Container className={classes.grandSlam}>
      <Typography>
        { title }
      </Typography>
      <Typography>
        { description }
      </Typography>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                columns.map((col) => (
                  <TableCell key={col} align="right">{col}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.oficialName}</TableCell>
                <TableCell align="right">{row.place}</TableCell>
                <TableCell align="right">{row.sup}</TableCell>
                <TableCell align="right">{row.webSite}</TableCell>
                <TableCell align="right">{row.lastChampion}</TableCell>
                <TableCell align="right">{row.maxWinner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default GrandSlam
