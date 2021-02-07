
import React from 'react';
import {Helmet} from "react-helmet";
import Data from '../data/locale_es.json';

function Head() {
  return (
	<Helmet>
		<title>{ Data.head.title }</title>
		<meta charset="UTF-8"/>
		<meta name="description" content={ Data.head.description }/>
		<meta name="keywords" content={ Data.head.keywords }/>

		<meta name="viewport"
				content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"/>
		<meta http-equiv="x-ua-compatible" content="ie=edge"/>

		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
		<meta name="apple-mobile-web-app-title" content={ Data.head.apple_mobile_web_app_title }/>

		<meta property="og:title" content={ Data.head.facebook.title }/>
		<meta property="og:description" content={ Data.head.facebook.description }/>
		<meta property="og:image" content={ Data.head.facebook.image }/>
		<meta property="og:image:width" content="2048"/>
		<meta property="og:image:height" content="1072"/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content={''}/>
		<meta property="fb:app_id" content={ Data.head.facebook.app_id }/>

		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:title" content={ Data.head.twitter.title }/>
		<meta name="twitter:description" content={ Data.head.twitter.title }/>
		<meta name="twitter:image" content={ Data.head.twitter.image }/>


		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
		<link rel="manifest" href="/site.webmanifest"/>
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color={ Data.head.theme.color}/>
		<meta name="msapplication-TileColor" content={ Data.head.theme.color}/>
		<meta name="theme-color" content={ Data.head.theme.color}/>

		{
			document.querySelector('html').classList.add('grand-slam')
		}
	</Helmet>	
	)
}

export default Head;
