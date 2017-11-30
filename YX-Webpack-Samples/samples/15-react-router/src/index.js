import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserhistory } from 'react-router';

require(__dirname + '/app.css');

var App = React.createClass({
	render: function () {
		return (
				<div>
					<div class="header">
						<ul>
							<li><Link to="/app">Dashboard</Link></li>
							<li><Link to="/inbox">Inbox</Link></li>
							<li><Link to="/calender">calender</Link></li>
						</ul>
						Logged in as Steper
					</div>
					{this.props.children}
				</div>
		);
	}
});