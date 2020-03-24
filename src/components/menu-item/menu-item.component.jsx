import React from 'react';

// routing
import { withRouter } from 'react-router-dom';

// styles
import './menu-item.styles.scss';

const MenuItem = ({ title, history, linkUrl, match }) => (
	<div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
		</div>
	</div>
);

export default withRouter(MenuItem);
