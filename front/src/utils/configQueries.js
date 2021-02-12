import appConfig from './appConfig.json'

const getTitle = () => appConfig.title

const getItemsNavBar = () => appConfig.navBar.sections

export {
  getTitle, getItemsNavBar
}
