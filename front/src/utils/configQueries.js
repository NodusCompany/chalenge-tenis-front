import appConfig from './appConfig.json'

const getTitle = () => appConfig.title

const getItemsNavBar = () => appConfig.navBar.items

const getSection = (idSection) => appConfig.navBar.items.find(({ id }) => id === idSection)

export {
  getTitle, getItemsNavBar, getSection
}
