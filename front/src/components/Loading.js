
import React from 'react';
import './Loading.scss';

function Loading() {
	return(
		<div className="snippet flex-row flex-center">
			<div className="stage">
				<div className="dot-pulse"></div>
			</div>
		</div>
	)
}

export default Loading