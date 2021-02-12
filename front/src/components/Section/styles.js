import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  Container: {},
  grandSlam: {
    marginTop: theme.spacing(5)
  },
  buildSection: {
    border: '1px solid black',
    width: theme.spacing(50),
    height: theme.spacing(50)
  },
  tableContainer: {
    marginTop: theme.spacing(5)
  },
  table: {
    minWidth: theme.spacing(80)
  }
}))
