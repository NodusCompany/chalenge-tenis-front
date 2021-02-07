import React from 'react';
import Loading from './Loading'
import PlayerBio from './PlayerBio'
import Data from '../data/locale_es.json';

import './Winners.scss';

const HOST = 'http://localhost:4000/winner'
const TOURNAMENTS = [
	{endpoint: '/us-open', name: 'US Open'},
	{endpoint: '/australian-open', name: 'Australian Open'},
	{endpoint: '/wimbledon', name: 'Wimbledon'},
	{endpoint: '/roland-garros', name: 'Roland Garros'},
]

class Winners extends React.Component {
	constructor() {
	    super()
    	this.state = {
			topPlayers: [],
			playerSelected: null,
			completed: false,
		}
  	}

	componentDidMount() {
		let count = 0

		TOURNAMENTS.map(tournament => {
			fetch(`${HOST}${tournament.endpoint}`)
			.then(response => response.json())
			.then(data => {
				count++
				// when multiple players comes in the response array (same win count), split them
				data.name.forEach(playerName => {
					this.setState(prevState => ({
						topPlayers: [...prevState.topPlayers, {tournament: TOURNAMENTS.name, name: playerName, count: data.count}]
					}))
				})
				// all 4 torunaments loaded then set true completed flag
				count === TOURNAMENTS.length && this.setState({completed: true})
			})
		})
	}

	handleItemClick(index) {
		this.setState({
		activeItem: index,
		})
	}

	render() {
		return(
			<div className="winners">
				<h1>{Data.winners.title}</h1>
				<div className="winners-container">
					<div className="flex-grow">
						<div>
							<p><em>{Data.winners.selector.text}, {Data.winners.selector.note}</em></p>
						</div>
						{(this.state.completed) ? 
							(
								<ul className="list">
									{this.state.topPlayers.sort((a, b) => a.count < b.count).map((player, index) => (
										<li 
											key={index}
											onClick={this.handleItemClick.bind(this, index)}
											className={this.state.activeItem === index ? 'active' : ''}
										>
											<a href="#" onClick={() => this.setState({playerSelected: player.name})}>{player.name} ({player.count})</a>
										</li>
									))}
								</ul>
							) : (
							<Loading/>
						)}
					</div>
					<div className="flex-grow">
						{
							this.state.playerSelected ? <PlayerBio player={this.state.playerSelected} /> : null
						}
					</div>

				</div>
			</div>
		)
	}
}

export default Winners;
