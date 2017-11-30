var React = require('react');
var ReactDom = require('react-dom');
var style = require('./main.css');

ReactDom.render(
		<div>
		<h1 className={style.h1}>Hello world!</h1>
		<h2 className='h2'>Hello webpack</h2>
		</div>,
		document.getElementById('example')
);