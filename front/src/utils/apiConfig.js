import { getApiUrl } from './configQueries'

const getLastWinner = ({ tournament }) => `${getApiUrl()}/winner/${tournament}`

const getLastTimeWon = ({ tournament }) => `${getApiUrl()}/winner/${tournament}/date`
export {
  getLastWinner, getLastTimeWon
}
