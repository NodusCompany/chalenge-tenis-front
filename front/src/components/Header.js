
import React from 'react';
import Data from '../data/locale_es.json';

import './Header.scss';

function Header() {
	const header = Data.header;
	const navigation = Data.navigation;

	return (
		<header className="header text-center">
			<div className="constrain">
				<div className="relative">
					<a href="/"><img className="header__logo"src={header.logo} alt={header.title}/></a>
				</div>
				<nav className="header__topbar">
					<ul>
						{
							navigation.map((item, index) => <li key={index}><a href={item.url} target={item.target} className={item.class}>{item.label}</a></li>)
						}
					</ul>
				</nav>
			</div>
		</header>
)}

export default Header; 