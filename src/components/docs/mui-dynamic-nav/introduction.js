import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IntroductionExample } from './constants';

const useStyles = makeStyles(() => ({
	documentBody: {
		fontFamily: 'Rajdhani',
		fontWeight: '800',
		paddingTop: '1px',
	},
	alignLeft: {
		textAlign: 'left',
	},
	centeredDiv: { fontSize: '14pt', marginLeft: '10%', marginRight: '10%' },
}));

export default function DynamicNavIntroduction() {
	const classes = useStyles();
	return (
		<div className={classes.documentBody}>
			<h1>Mui Dynamic Nav Documentation</h1>

			<div className={classes.centeredDiv}>
				<a href='https://www.npmjs.com/package/mui-dynamic-nav'>
					Link to Package
				</a>
				<p>
					Mui-Dynamic-Nav was created as an utility to help streamline the
					inital development process for react dashboard projects. It is a
					dynamic package that works ontop of the react-router-dom, React, and
					Material-UI frameworks. It is dynamic due to the fact that it uses the
					Material UI theming technology which is a powerful styling tool.
				</p>
				<p>To get started:</p>
			</div>
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{IntroductionExample}
				</SyntaxHighlighter>
			</div>
			<br></br>
		</div>
	);
}
