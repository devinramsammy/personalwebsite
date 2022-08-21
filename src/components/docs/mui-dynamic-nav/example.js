import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
	NavbarImageOne,
	NavbarImageThree,
	NavbarImageTwo,
} from '../../../assets';
import {
	NavbarExampleFirst,
	NavbarExampleSecond,
	NavbarExampleThird,
} from './constants';

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

export default function DynamicNavExample() {
	const classes = useStyles();

	return (
		<div className={classes.documentBody}>
			<h1>Mui Dynamic Nav Examples</h1>
			<div className={classes.centeredDiv}>
				<p>
					Below will show off multiple ways that this navbar can be styled for
					your project needs. If you want to use the ThemeProvider module from
					Material-UI, please wrap your project code with a default
					ThemeProvider theme.
				</p>
			</div>
			<img height='auto' width='90%' src={NavbarImageOne} alt='Example 1' />
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{NavbarExampleFirst}
				</SyntaxHighlighter>
			</div>
			<img height='auto' width='90%' src={NavbarImageTwo} alt='Example 2' />
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{NavbarExampleSecond}
				</SyntaxHighlighter>
			</div>
			<img height='auto' width='90%' src={NavbarImageThree} alt='Example 3' />
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{NavbarExampleThird}
				</SyntaxHighlighter>
			</div>
			<br></br>
		</div>
	);
}
