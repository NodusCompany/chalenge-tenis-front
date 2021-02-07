import React from 'react';
import Head from './components/Head'
import Header from './components/Header'
import Winners from './components/Winners'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
	constructor(){
		super()
		
		this.state = {
			filter: ''
		}
  	}

  	render() {
		return (
			<main className="grand-slam-wrapper" id="view-sale">
				<Head/>
				<Header/>
				<div className="content-wrapper">
					<Winners/>
				</div>
				<Footer/>
				<div className="header__mobile-menu--toggle menu-mobile-helper"></div>
			</main>
		)
	  }
}


export default App;
