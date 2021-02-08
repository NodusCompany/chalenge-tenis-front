
import React from 'react';
import Data from '../data/locale_es.json';

import './Footer.scss';

function Footer() {
	const links = Data.footer.links;
	return (
		<footer className="footer text-center">
			<ul>
				{
					links.map((link, index) =>
						<li key={index} className="footer__link"><a href={link.url}>{link.label}</a></li>
					)
				}
			</ul>
		</footer>
  )}

  export default Footer