import { getApiUrl } from './configQueries'

const getLastWinner = ({ tournament }) => `${getApiUrl()}/winner/${tournament}`

const getLastTimeWon = () => 'a'
export {
  getLastWinner, getLastTimeWon
}
