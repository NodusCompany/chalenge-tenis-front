import appConfig from './appConfig.json'

const getApiUrl = () => appConfig.endpoints.grandSlam

const getTitle = () => appConfig.title

const getItemsNavBar = () => appConfig.navBar.items

const getSection = (idSection) => appConfig.navBar.items.find(({ id }) => id === idSection)

const getTournaments = () => appConfig.tournaments

export {
  getApiUrl, getTitle, getItemsNavBar,
  getSection, getTournaments
}
