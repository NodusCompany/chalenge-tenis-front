
import React from 'react';
import Loading from './Loading'
import Data from '../data/locale_es.json';

import './PlayerBio.scss';

const HOST = 'http://localhost:4000/winner'
const TOURNAMENTS = [
	{endpoint: '/us-open', name: 'US Open'},
	{endpoint: '/australian-open', name: 'Australian Open'},
	{endpoint: '/wimbledon', name: 'Wimbledon'},
	{endpoint: '/roland-garros', name: 'Roland Garros'},
]



class PlayerBio extends React.Component {
	constructor() {
	    super()
    	this.state = {
			winDates: {},
		}
  	}

	componentDidMount() {
		this.componentDidUpdate()
	}
	  
	componentDidUpdate() {
		if (this.props.player) {
			const player = this.props.player

			// if not cached data then request from server
			if (!this.state.winDates[player]) {
				this.setState(prevState => ({
					winDates: {
						...prevState.winDates,
						[player]: []
					}
				}))
				TOURNAMENTS.map(tournament => {
					fetch(`${HOST}${tournament.endpoint}/date/${encodeURIComponent(player)}`)
					.then(response => response.json())
					.then(data => {
						// formating to readable date
						const d = new Date(data.lastYearWon, data.lastMonthWon - 1, data.lastDayWon);
						this.state.winDates[player].push({
							[tournament.name]: `${new Intl.DateTimeFormat(Data.head.lang, { day: '2-digit' }).format(d)} de ${new Intl.DateTimeFormat(Data.head.lang, { month: 'long' }).format(d)} de ${new Intl.DateTimeFormat(Data.head.lang, { year: 'numeric' }).format(d)}`,
							numericDate: new Date(d).getTime()
						})
						this.setState({
							done: true
						})
					})
				})
			}
		}
	}

	render () {
		return(
			<div className="player-bio">
				<p><em>{Data.bio.winsTitle}</em></p>
				<ul className="flex-column">
				{
					// if there is winDates and 4 tournaments were loaded
					this.state.winDates[this.props.player] && this.state.winDates[this.props.player].length === TOURNAMENTS.length ?
					this.state.winDates[this.props.player].sort((a, b) => a.numericDate - b.numericDate).map((item, index) => {
						const results = Object.entries(item)[0]
						return(<li key={index}><strong>{results[0]}</strong>, {results[1]}</li>)
					}) : 
					<Loading/>
				}
				</ul>
			</div>
		)
	}
}

export default PlayerBio